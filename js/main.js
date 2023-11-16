let title = document.querySelector(".title");
let titleEnter = document.querySelector(".title__enter");
let titleBtn = document.querySelector(".title__btn");
let titleBox = document.querySelector(".title__box");
let titleBtnTop = document.querySelector(".title__btnTop");
let add = document.querySelector(".add");
let addRow = document.querySelector(".add__row");
let addColumn = document.querySelector(".add__column");
let variant = document.querySelector(".variant");
let variantWrap = document.querySelector(".one");
let variantBox = document.querySelector(".variant__box");
let oneInner = document.querySelector(".one__inner");

let row = document.querySelector(".many__itemRow");
let rowInner = document.querySelector(".many__rows");
let column = document.querySelector(".many__itemColumn");
let columnInner = document.querySelector(".many__columns");

let btn = document.querySelector(".variant__btn");
let list = document.querySelector(".variant__list");

let addQues = document.querySelector(".add__question");
let wrapper = document.querySelector(".wrapper");

let edit = document.querySelector(".active");

let deleteBtn = document.querySelector(".delete__btn");
let question = document.querySelector(".questions__edit");
let checkbox = document.querySelector("#check");
let labelCheck = document.querySelector(".check");

addQues.addEventListener('click', function(){
    let wrap = edit.cloneNode(true);
    wrap.classList.add('actNode');
    wrapper.appendChild(wrap);
    let btn = wrap.querySelector('.add');
    let inner = wrap.querySelector('.one__inner');
    let remove = wrap.querySelector('.variant__box');
    let answerAdd = wrap.querySelector('.one');
    let windOpen = wrap.querySelector('.variant__btn');
    let window = wrap.querySelector('.variant__list');
    /*btn.addEventListener('click', cloneElements.bind(null,inner));*/
    let adRow = wrap.querySelector('.add__row');
    let manyRow = wrap.querySelector('.many__itemRow');
    let manyInner = wrap.querySelector('.many__rows');

    let adColumn = wrap.querySelector('.add__column');
    let manyColumn = wrap.querySelector('.many__itemColumn');
    let manyInnerCol = wrap.querySelector('.many__columns');
    let rowWrapper = wrap.querySelector('.many__rows');
    let columnWrapper = wrap.querySelector('.many__columns');
    
    let DeleteBtn = wrap.querySelector(".delete__btn");
    let Checkbox = wrap.querySelector("#check");
    let LabelCheck = wrap.querySelector(".check");

    
    btn.addEventListener('click', function(){
        
        let clonedInput = answerAdd.cloneNode(true);
        let clonedDiv = clonedInput.querySelector('input');
        clonedDiv.value = "";
    
        inner.appendChild(clonedInput);
    })
    remove.addEventListener('click', (event) =>{
        if (event.target.classList.contains('variant__closed')){
            const answer = event.target.closest('.one');
            answer.remove();
        }
    })
    DeleteBtn.addEventListener('click', function(){
        wrap.remove();
    })

    windOpen.addEventListener('click', function(){
        window.classList.toggle('hidden');
    })

    const tabHeadersClone = wrap.querySelectorAll('[data-tab]');
    const contentBoxesClone = wrap.querySelectorAll('[data-tab-content]');
    tabHeadersClone.forEach(function(item){
        item.addEventListener('click', function(){
            contentBoxesClone.forEach(function(item){
                
                item.classList.add('hidden');
                console.log("ADDhidden");
                
            })
            const contentBox = wrap.querySelector('#' + this.dataset.tab);
            contentBox.classList.remove('hidden');
            console.log("REMOVEhidden");
            
        })
    })

    adRow.addEventListener('click', function(){
    
        let rowInput = manyRow.cloneNode(true);
        let rowDiv = rowInput.querySelector('input');
        rowDiv.value = "";
        
        manyInner.appendChild(rowInput);
        
    })
    adColumn.addEventListener('click', function(){
        
        let columnInput = manyColumn.cloneNode(true);
        let columnDiv = columnInput.querySelector('input');
        columnDiv.value = "";
        
        manyInnerCol.appendChild(columnInput);
        
    })

    rowWrapper.addEventListener('click', (event) =>{
        if (event.target.classList.contains('variant__closed')){
            const answer = event.target.closest('.many__itemRow');
            answer.remove();
        }
    })
    columnWrapper.addEventListener('click', (event) =>{
        if (event.target.classList.contains('variant__closed')){
            const answer = event.target.closest('.many__itemColumn');
            answer.remove();
        }
    })
    Checkbox.addEventListener('click', function(){

  
        LabelCheck.classList.toggle('act');
     
    })
})
titleBtn.addEventListener('click', function(){
    let enterName = titleEnter.value;
    console.log(enterName)
    title.textContent = enterName;
    titleBox.classList.add('hidden');
    titleBtnTop.classList.remove('hidden');
})

titleBtnTop.addEventListener('click', function(){
    titleBox.classList.remove('hidden');
    titleBtnTop.classList.add('hidden');
})

add.addEventListener('click', function(){
    
    let clonedInput = variantWrap.cloneNode(true);
    let clonedDiv = clonedInput.querySelector('input');
    clonedDiv.value = "";
    
    oneInner.appendChild(clonedInput);
    
})

addRow.addEventListener('click', function(){
    
    let rowInput = row.cloneNode(true);
    let rowDiv = rowInput.querySelector('input');
    rowDiv.value = "";
    
    rowInner.appendChild(rowInput);
    
})
addColumn.addEventListener('click', function(){
    
    let columnInput = column.cloneNode(true);
    let columnDiv = columnInput.querySelector('input');
    columnDiv.value = "";
    
    columnInner.appendChild(columnInput);
    
})
variantBox.addEventListener('click', (event) =>{
    if (event.target.classList.contains('variant__closed')){
        const answer = event.target.closest('.one');
        answer.remove();
    }
})
rowInner.addEventListener('click', (event) =>{
    if (event.target.classList.contains('variant__closed')){
        const answer = event.target.closest('.many__itemRow');
        answer.remove();
    }
})
columnInner.addEventListener('click', (event) =>{
    if (event.target.classList.contains('variant__closed')){
        const answer = event.target.closest('.many__itemColumn');
        answer.remove();
    }
})

const tabHeaders = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');
tabHeaders.forEach(function(item){
	item.addEventListener('click', function(){
		contentBoxes.forEach(function(item){
            
            item.classList.add('hidden');
            
            
		})
		const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('hidden');
        
	})
})

btn.addEventListener('click', function(){
    list.classList.toggle('hidden');
})

deleteBtn.addEventListener('click', function(){
    question.remove();
})

checkbox.addEventListener('click', function(){

  
    labelCheck.classList.toggle('act');
 
})
window.onload = function() {
    var scrollUpBtn = document.getElementById("scrollUpBtn");
    var scrollDownBtn = document.getElementById("scrollDownBtn");

    scrollUpBtn.addEventListener("click", function() {
        scrollToTop();
    });

    scrollDownBtn.addEventListener("click", function() {
        scrollToBottom();
    });

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    function scrollToBottom() {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }
};