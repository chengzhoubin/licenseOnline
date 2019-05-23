module.exports = {
    rsa:{
        format:'VERSION=8.1.0,HID={0},LICENSED_TO={1},WIZARD_CNT=9999999,AUDIT_CNT=9999999,VIEWER_CNT=2,LOC_CNT={2},RANDOMID=0.315889727937006,CONSOLE_CNT=9999999,COUNTERS=TRUE,EXPIRATION={3},EXPIRATION_DATE={4},Wizard=TRUE,Audit=TRUE,Team=TRUE,Console=TRUE,64Bit=TRUE,SCANS={5},PASS=CA7AA12026EB95549AA3E9F949A0534266E22397,EPID=3EWv7JN7jQSKvDGw6/o1yw==,VFORCE=TRUE,CSHARP=TRUE,JAVA=TRUE,APEX=TRUE,JSCRIPT=TRUE,CPP=TRUE,ASP=TRUE,VBNET=TRUE,VB6=TRUE,VBS=TRUE,PHP=TRUE,RUBY=TRUE,PERL=TRUE,OBJC=TRUE,PLSQL=TRUE,PYTHON=TRUE,GROOVY=TRUE,SCALA=TRUE,EDITCXQUERIES={14},NUMBER_OF_AUDITORS={17},OSA={18},USERS={19},PROJECTS={20}',
        publickey:'<RSAKeyValue><Modulus>tz9zqALhwne3GcA1El2NcEIfFQpAvmcUJUOwl/fewdF+22/5F+Ow9uDJ5w9VHKy7vla1yLJ8BMnqpXrMDb+o2w6DzNEi8f7x9m/JwsaOWePnwX/vFWNGC6hXNV5nHqES8d0eUgNHbH1rsBqBxfhVBBb81wP+/hfrzOHYX61oo8k=</Modulus><Exponent>AQAB</Exponent><P>4OYg5s7ZZH633WSG16IZHk2c3xUjw7c/bxOuZgIAP5gQzLxGe3WYJSqIrejIYg2GOkuJozT7TRnqPGGQ3v+YAw==</P><Q>0JbKtbBUm9UsiLIqCySRfyHPw1Jt2Z5F5cehqd3AhqBMZ9Uao/nYaklXnqKlI0O010LRcPui5hqcun4t3LlJQw==</Q><DP>FyH0nmkGWVzjYqVVbVaiCMjo6tVM0XPG1ZELrjhkeCYXDEgNY+OLm78NQf4gpl1HwjVE2gG4G40f18gdU6Ksqw==</DP><DQ>zbiq3F64U6j/byIojSzXwscaHc2iQcrzrRgivWHTi/N058Mpryeu5cTIAdDvhcQ1C0j/P6sukjsU8GmZ2eNz+Q==</DQ><InverseQ>MloGNxBM25U7/2bYIRPL8kYhei0o/oTHTwFvNJIdHinAruqYQrMzYs5E6XdQVwvkuAKl+y05nfkEa1JNtkBfQw==</InverseQ><D>e7Dj05umYcrHGCWqbSwixYyMSHp0O1F+wqyPLfUNMozDcUGCxQJXOD2Ba2rpC4L480C6Ua9QkTbuISbjR8CAK8BkXW1XwXtDnW9YpRG4fvI1VSt3RpY8hZ8ieSTpsIuCkWe4Qv24k4AMjwM6bnesLWtyKUw0ZHwQzawOiSy6c7U=</D></RSAKeyValue>'
    },
    environment:{
        development:{
            server: {
                port: process.env.PORT || 3000,
                hostname: process.env.HOSTNAME || 'localhost',
              },
              database: {
                url: 'mongodb://192.168.10.113:27017/local',
              },
              email:{
                smtpServer:"",
                port:"",
                secure:false,
                smtpUser:"",
                smtpPassword:"",
                from:""                
              }
        },
        test: {
            server: {
              port: process.env.PORT || 3100,
              hostname: process.env.HOSTNAME || 'localhost',
            },
            database: {
              url: 'mongodb://localhost/express-test',
            },
            email:{
              smtpServer:"",
              port:"",
              secure:false,
              smtpUser:"",
              smtpPassword:"",
              from:""                 
              }
        },
        production: {
            server: {
              port: process.env.PORT || 3200,
              hostname: process.env.HOSTNAME || 'localhost',
            },
            database: {
              url: 'mongodb://mongo:27017/express-production',
            },
            email:{
              smtpServer:"",
              port:"",
              secure:false,
              smtpUser:"",
              smtpPassword:"",
              from:""                   
              }
        }
    },
    Keys:{
        evnDevelopment:"development",
        evnTest:"test",
        production:"production"
    },
    modelKeyValue:{
      entUserKey:"User",
      entApplyKey:"Apply"
    }
  }