import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 3000;
axios.defaults.baseURL ='/mkt';


axios.defaults.withCredentials=true;

let commTool;
let tokenValue="-";
let sessionValue="-";


//http request 拦截器
axios.interceptors.request.use(
  config => {
    console.log(util.tran2json(config));
  	if(config.url&&config.url.indexOf('/file/upload') > 0){
    	config.headers = {
	      'Content-Type': 'multipart/form-data'
	    };
    }else if(config.url&&config.url.indexOf('/mkt/roster/uploadRosterData') > 0){
    	config.headers = {1234567890-333333333333333333333333333
	      'Content-Type': 'multipart/form-data'
	    };
    }else if(config.url&&config.url.indexOf('/mkt/prize/importPrizeCoupon') > 0){
    	config.headers = {
	      'Content-Type': 'multipart/form-data'
	    };
    }else if(config.url&&config.url.indexOf('/citylife/upload') > 0){
    	config.headers = {
	      'Content-Type': 'multipart/form-data'
	    };
    }else{
	    config.headers = {
	      'Content-Type':'application/x-www-form-urlencoded'
	    };
	    config.data=qs.stringify(config.data);
    }
    commTool.$Loading.start();
    return config;
  },
  error => {
  	console.log(err)
    return Promise.reject(err);
  }
);


//http response 拦截器
axios.interceptors.response.use(
  	response => {
	  	if(response.status==200){
	  		tokenValue=response.data.token;
	  		sessionValue=response.data.sessionId;
	  		commTool.$Loading.finish();
	  		return response;
	  	}else if(response.status==401){
			commTool.$Loading.finish();
			commTool.$router.push({name:'401'});
		}else if(response.status==403){
			commTool.$Loading.finish();
			commTool.$router.push({name:'403'});
		}else if(response.status==404){
	  		commTool.$Loading.finish();
	  		commTool.$router.push({name:'404'});
	  	}else if(response.status==500){
	  		commTool.$Loading.finish();
	  		commTool.$router.push({name:'500'});
	  	}else if(response.status==408){//请求超时
	  		commTool.$Loading.finish();
	  	}else{
	  		commTool.$Loading.finish();
	  		commTool.$router.push({name:'403'});
	  	}
	  	closeSpinShow(commTool);
    },
    error => {
    	closeSpinShow(commTool);
		if("undefined" != typeof error.response){
			if(error.response.status==401){
				commTool.$Loading.finish();
				commTool.$router.push({name:'401'});
			}else if(error.response.status==403){
				commTool.$Loading.finish();
				commTool.$router.push({name:'403'});
			}else if(error.response.status==404){
		  		commTool.$Loading.finish();
		  		commTool.$router.push({name:'404'});
		  	}else if(error.response.status==500){
		  		commTool.$Loading.finish();
		  		commTool.$router.push({name:'500'});
			  }else{
		    	commTool.$Loading.finish();
		    	return Promise.reject(error);
		    }
    	}else{
    		commTool.$Loading.finish();
		    return Promise.reject(error);
    	}
   }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params,vueObject){
	commTool=vueObject;
  	return new Promise((resolve,reject) => {
    axios.get(url,params).then(response => {
    	vueObject.$Loading.finish();
    })
    .catch(err => {
      	reject(err);
    })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

 export function post(url,data,vueObject){
 	commTool=vueObject;
    return new Promise((resolve,reject) => {
			axios.post(url,data).then(response => {
		    	resolve(response.data);
		    },err => {
		        this.$Notice.error({
			        title: '请求提示',
			        desc: '后台服务报错或未启动，请联系管理员'
		    	});
		    	closeSpinShow(commTool);
		    	commTool.$Loading.finish();
		    	reject(err);
		    })
   })
 }

 /**
  * 关闭遮罩层
  */
 export function closeSpinShow(commTool){
 	if("undefined" != typeof commTool.custSpinShow){//遮罩层
		commTool.custSpinShow=false;
	}
	if("undefined" != typeof commTool.spinUplaod){//遮罩层
		commTool.spinUplaod=false;
	}
	if("undefined" != typeof commTool.spinShowCut){//遮罩层
		commTool.spinShowCut=false;
	}
	if("undefined" != typeof commTool.spinShowCut1){//遮罩层
		commTool.spinShowCut1=false;
	}
	if("undefined" != typeof commTool.spinShow){//遮罩层
		commTool.spinShow=false;
	}

 }
 /**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data,vueObject){
	commTool=vueObject;
  	return new Promise((resolve,reject) => {
    	axios.patch(url,data).then(response => {
           	resolve(response.data);
       },err => {
           	reject(err);
        })
  })
}

 /**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data,vueObject){
	commTool=vueObject;
  	return new Promise((resolve,reject) => {
    	axios.put(url,data).then(response => {
           	resolve(response.data);
       },err => {
           	reject(err);
        })
  })
}
