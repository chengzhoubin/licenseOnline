//mongodb数据库操作
const mongodb_Client = require('mongoose');
class entityReposity{
    constructor(options){
        this.workcontext = options.workcontext;
        this.monogo_url = options.url;
        this.monogo_collection = options.collection;
        this.model_schema = options.schema;
        this.addedErrorCallbackFunc = options.onAddErrorHandle;
        this.updatedErrorCallbackFunc = options.onUpdatedErrorHandle;
        this.affactedRowBoolean = function(modified) { 
            return modified["n"] > 0;
        }
        this.contextEnsureConnected = function(){
            if(typeof this.context === 'undefined'){
                let db = mongodb_Client.createConnection(this.monogo_url,{useNewUrlParser:true})
                this.context = db.model(this.monogo_collection,this.model_schema)
            }
            return this.context;
        }
    }

    //添加
    addObject(entity){
        let context = this.contextEnsureConnected();
        let monogoEntity = new context(entity);
        monogoEntity.save(this.addedErrorCallbackFunc);
        return 0;
    }

    //添加异步
    addObjectAsync(entity){
        let context = this.contextEnsureConnected();
        let monogoEntity = new context(entity);
        return new Promise((resovle,reject)=>{
            monogoEntity.save(this.addedErrorCallbackFunc);
            resovle(0);
        });
    }

    //更新
    updateObject(condtions,updateJsonSet,pkAs=true){
        let context = this.contextEnsureConnected();
        let ret = 0;
        let callUpdateFuncName = pkAs ? "updateOne":"updateMany";
        context[callUpdateFuncName](condtions,updateJsonSet, (err,raw) => {
            if(err){
                ret = -1002;
                return;
            }
            if(!this.affactedRowBoolean(raw)){
                ret = -1001;
                if(typeof this.updatedErrorCallbackFunc === "function"){
                    this.updatedErrorCallbackFunc(err || {exp:""});
                }
            }
        });
        return ret;
    }

    //更新异步
    updateObjectAsync(condtions,updateJsonSet){
        let context = this.contextEnsureConnected();
        let ret = 0;
        let callUpdateFuncName = pkAs ? "updateOne":"updateMany";
        return new Promise((resolve,reject)=>{
            context[callUpdateFuncName](condtions,updateJsonSet,(err,raw) => {
                if(err){
                    ret = -1002;
                    return;
                }
                    
                if(!this.affactedRowBoolean(raw)){
                    ret = -1001;
                    if(typeof this.updatedErrorCallbackFunc === "function"){
                        this.updatedErrorCallbackFunc(err || {exp:""});
                    } 
                }
            });
            resolve(ret);
        });
    }

    //删除
    removeObject(conditions){
        let context = this.contextEnsureConnected();
        context.remove(conditions,err=>{ 
        })
    }

    //查找
    findObject (){

    }
}

module.exports = entityReposity
