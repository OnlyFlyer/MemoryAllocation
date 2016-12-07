/**
 * Created by wutao on 16/11/17.
 */
var express = require("express");
var url = require("url");
var fs = require("fs");
var app = express();
    var obj = {
        Num : 0,
        Size : "",
        Begin : "",
        Finish : "",
        State : "",
        Sum:function(){
            this.Finish=this.Begin + this.Size;
            return this.Finish;
        }
    };
        obj.Sum();
    //85-135
    var obj1 = {
        Num : 1,
        Size : 50,
        Begin : 85,
        Finish : "",
        State : true,
        Sum:function(){
            this.Finish=this.Begin + this.Size;
            return this.Finish;
        }
    };
    obj1.Sum();
    //155-187
    var obj2 = {
        Num : 2,
        Size : 32,
        Begin : 155,
        Finish : "",
        State : true,
        Sum:function(){
            this.Finish=this.Begin + this.Size;
            return this.Finish;
        }
    };
    obj2.Sum();
    //275-345
    var obj3 = {
        Num : 3,
        Size : 70,
        Begin : 275,
        Finish : "",
        State : true,
        Sum:function(){
            this.Finish=this.Begin + this.Size;
            return this.Finish;
        }
    };
    obj3.Sum();
    //532-592
    var obj4 = {
        Num : 4,
        Size : 60,
        Begin : 532,
        Finish : "",
        State : true,
        Sum:function(){
            this.Finish=this.Begin + this.Size;
            return this.Finish;
        }
    };
    obj4.Sum();
    //650-730
    var obj5 = {
        Num : 5,
        Size : 80,
        Begin : 650,
        Finish : "",
        State : true,
        Sum:function(){
            this.Finish=this.Begin + this.Size;
            return this.Finish;
        }
    };
    obj5.Sum();
    var arr = [obj,obj1,obj2,obj3,obj4,obj5];
    var brr ;
    brr = arr.slice(0);
    //console.log(brr);
app.use(express.static("./public"));
app.get("/parse",function(req,res){
    //接收req对象
    var oReq = url.parse(req.url,true).query;
    console.log(oReq);
    var need = oReq.need;
    var ff = oReq.ff; //console.log(typeof ff);
    var nf = oReq.nf;
    var bf = oReq.bf;
    var wf = oReq.wf;
    //判断
    if(ff == "on"){
        FF();
    }else if(nf == "on"){
        NF();
    }else if(bf == "on"){
        BF();
    }else if(wf == "on"){
        WF();
    }else{
        res.send("出现未知错误!");
    }

    //首次适应
    function FF(){
        //内存分配
        for(var i=1; i<arr.length; i++){
            if(need <= arr[i].Size){
                arr[i].Size -= need;
                arr[i].Sum();
                console.log("分配成功!分配的分区号为:" + i + ",分配后的arr:");
                //删除空闲区为0的分区
                if(arr[i].Size == 0){
                    arr.splice(i,1);  //删除数组的某一项开始,和删除项的个数
                    //arr[i] = null;
                    //delete arr[i];
                    }
                console.log(arr);
                //内存回收
                console.log("无操作10秒后回收内存");
                setTimeout(function(){
                    console.log("内存已回收");
                    arr = [obj,obj1,obj2,obj3,obj4,obj5];
                    arr = arr.remove();
                    console.log(arr);
                },10000);
                    return;
                }else{
                    console.log("分区" + i +"分配失败!need不符合要求,请检查!");
                    }
        }
    }
    //循环首次适应
    function NF(){
        do{
            var i=1;
            var j=false;
            if(i == arr.length){
                i=1;
            }
            if(need <= arr[i].Size){
                arr[i].Size -= need;
                arr[i].Sum();
                console.log("分配成功!分配的分区号为:" + i + ",分配后的arr:");
                j=true;
                //删除空闲区为0的分区
                if(arr[i].Size == 0){
                    arr.splice(i,1);  //删除数组的某一项开始,和删除项的个数
                    //arr[i] = null;
                    //delete arr[i];
                }
                i++;
                console.log(i);
                console.log(arr);
                console.log("无操作10秒后回收内存");
                setTimeout(function(){
                    console.log("内存已回收");
                    arr = [obj,obj1,obj2,obj3,obj4,obj5];
                    arr = brr;
                    console.log(arr);
                    //console.log(brr);
                },10000);
                return;
            }else{
                console.log("分区" + i +"分配失败!need不符合要求,请检查!");
            }
        }while (j = true);
    }
    //最佳适应
    function BF(){}
    //最坏适应
    function WF(){}
});
app.listen(3000);
console.log("server start!");