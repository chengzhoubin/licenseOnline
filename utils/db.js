//mongodb数据库操作
const mongodb_Client = require('mongoose');
var entityReposity = module.exports = function(options){
    this.monogo_url = options.url;
    this.monogo_collection = options.collection;
    this.model_schema = options.schema;
    this.addedErrorCallbackFunc = options.onAddErrorHandle;
    this.updatedErrorCallbackFunc = options.onUpdatedErrorHandle;
    this.affactedRowBoolean = (modified) => modified["n"] > 0;
    //this.model_context = {}
    this.contextEnsureConnected = function(){
        if(typeof this.context === 'undefined'){
            let db = mongodb_Client.createConnection(this.monogo_url,{useNewUrlParser:true})
            this.context = db.model(this.monogo_collection,this.model_schema)
        }
        return this.context;
    }
}

//添加
entityReposity.prototype.addObject = function(entity){
    let context = this.contextEnsureConnected();
    let monogoEntity = new context(entity);
    monogoEntity.save(this.errorCallbackFunc);
    return 0;
}

//添加异步
entityReposity.prototype.addObjectAsync = function(entity){
    let context = this.contextEnsureConnected();
    let monogoEntity = new context(entity);
    return new Promise((resovle,reject)=>{
        monogoEntity.save(this.errorCallbackFunc);
        resovle(0);
    });
}

//更新
entityReposity.prototype.updateObject = function(condtions,updateJsonSet){
    let context = this.contextEnsureConnected();
    let ret = 0;
    context.updateOne(condtions,updateJsonSet, (err,raw) => {
        if(!this.affactedRowBoolean(raw)){
            ret = -1001;
            this.updatedErrorCallbackFunc(err || {exp:""});
        }
    });
    return ret;
}

//更新异步
entityReposity.prototype.updateObject = function(condtions,updateJsonSet){
    let context = this.contextEnsureConnected();
    let ret = 0;
    return new Promise((resolve,reject)=>{
        context.updateOne(condtions,updateJsonSet,(err,raw) => {
            if(!this.affactedRowBoolean(raw)){
                ret = -1001;
                this.updatedErrorCallbackFunc(err || {exp:""});
            }
        });
        resolve(ret);
    });
}

//删除
entityReposity.prototype.removeObject = function(){

}

//查找
entityReposity.prototype.findObject = function(){

}
