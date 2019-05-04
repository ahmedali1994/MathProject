var TriangleController = (function(){

    return{

    }
})();

var UIController = (function(){
let domString ={
    sideA: 'SideA',
    sideB: 'SideB',
    sideH: 'SideH',
    calculateBtn: '.calculate_btn'
}
    return{
        domString
    }
})();

var Controller = (function(trigCtrl,uiCtrl){
    function setupEventListener(){
        var dom = uiCtrl.domString;
        document.querySelector(dom.calculateBtn).addEventListener('click',findSide);
        document.addEventListener('keypress',function(event){
            if(event.which === 13){
                findSide();
            }
        });
    }
    var findSide = function(){
        console.log('clickedMe');
    };

    return{
        init: function(){
            console.log('good');
            setupEventListener();
        }
    }

})(TriangleController,UIController);

Controller.init();