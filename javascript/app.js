/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

let allDonor=[];
function Donation (donorName,amount,donorAge) {
  this.donorName=donorName;
  this.amount=amount;
  this.donorAge=donorAge;
  allDonor.push(this);
}


Donation.prototype.randomAge=function(){
  this.donorAge=Math.floor(18 + Math.random()*(30+ 1 - 18));
};


let container=document.getElementById('container');
let table=document.createElement('table');
container.appendChild(table);

function headerRow() {
    let tableRow=document.createElement('tr');
    table.appendChild(tableRow);
    let headerArr=['Donor Name','Donor Age','Amount'];
    for (let i = 0; i < headerArr.length; i++) {
      let tableData=document.createElement('td');
      tableRow.appendChild(tableData);
      tableData.textContent=headerArr[i];

    }
}
headerRow();


let total=0;

Donation.prototype.render=function(){
let count=allDonor.length-1;
let tableRow=document.createElement('tr');
table.appendChild(tableRow);

let tableData=document.createElement('td');
tableRow.appendChild(tableData);
tableData.textContent=allDonor[count].donorName;

tableData=document.createElement('td');
tableRow.appendChild(tableData);
tableData.textContent=allDonor[count].donorAge;

tableData=document.createElement('td');
tableRow.appendChild(tableData);
tableData.textContent=allDonor[count].amount;


 saveLocal();
};
let totalAmount=document.createElement('h2');
totalAmount.setAttribute('id','h2');
container.appendChild(totalAmount);
totalAmount.textContent='Total Amount :';
total+=parseInt(`Total Amount ${total}`);


let form=document.getElementById('form');
form.addEventListener('submit',clickHandle);

function clickHandle(event) {
    event.preventDefault();
    let donorName=event.target.donor.value;
    let amount=event.target.amount.value;

    let userDonor=new Donation(donorName,amount);
    userDonor.randomAge();
    userDonor.render();
}

function saveLocal() {
    localStorage.setItem('donation',JSON.stringify(allDonor));
}

function getLocalItem() {
    let data=localStorage.getItem('donation');
    let dataParsed=JSON.parse(data);
    if(dataParsed){
        for (let i = 0; i < dataParsed.length; i++) {
           let reinst=new Donation(dataParsed[i].donorName,dataParsed[i].amount,dataParsed[i].donorAge);
            reinst.render();
        }
    }
}
getLocalItem();
