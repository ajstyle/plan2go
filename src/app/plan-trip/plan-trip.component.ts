import { Component, OnInit , EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import * as moment from 'moment';

@Component({
  selector: 'app-plan-trip',
  templateUrl: './plan-trip.component.html',
  styleUrls: ['./plan-trip.component.css']
})
export class PlanTripComponent implements OnInit {

  tripIndex = new EventEmitter() ;
  tripArrayData = [];
  tripDayData = [] ;
  trips = [];
dateDiff: number ;
LIST_IDS = [] ;
tripObj = [];
  tripPlan = [{
    flightName: [
    { id: 1, state: 'Costa Marina Villas', amount: 450 },
    { id: 2, state: 'United State-America', amount: 800 }
  ],
    hotels: [
      { id: 1, state: 'United State-Greece', amount: 660 },
      { id: 2, state: 'Apanemo', amount: 150 }
    ],
    attractions: [
      { id: 1, state: 'Acropolis', amount: 50 },
      { id: 2, state: 'Acropolis Museum', amount: 20 }
    ]
  }];






  constructor() { }
  ngOnInit() {
     this.getTripData();
  }
  timeChange(data) {
console.log(data);
  }

  getIndex(i) {
    alert(i);
  }
  getCalender(plan) {
console.log(plan);

this.dateDiff = this.getDayDiffrence(plan.fromDate , plan.toDate) ;
this.tripObj =  this.getDayArray(plan.fromDate , plan.toDate);



  }


  getDayDiffrence(fromDate , toDate) {
  const startDate = moment(fromDate, 'DD.MM.YYYY');
  const endDate = moment(toDate, 'DD.MM.YYYY');
  return endDate.diff(startDate, 'days');

  }

  getDayArray(fromDate , toDate) {
    const obj = {} ;
    const d = moment(fromDate, 'DD.MM.YYYY');
    const e = moment(toDate , 'DD.MM.YYYY');
    const tripObj = [] ;
    for (let i = moment(d) , index = 0  ; i.isSameOrBefore(e); i.add(1 , 'days') , index++) {
      const weekDayName = moment(i).format('ddd');
      console.log(weekDayName);
      tripObj[index] = {
        weekDayName,
        date : i.format('DD/MM/YYYY'),
        tripArrayData  :  [...this.tripArrayData]
      };


  }
    console.log(tripObj);
    return tripObj ;
}
    getTripData() {
    for (let i = 0   ; i <= 23 ; i++) {
      this.tripArrayData.push(  {id : i , active : false , time : `${i}:00`, rowDisable : true });
    }
  }


drop( event: CdkDragDrop<string[]> ) {
  console.log(event);
  if (event.previousContainer === event.container)  {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {

      console.log('Previous =' ,  event.previousIndex);
      console.log('currentIndex =' ,  event.currentIndex , );
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      const containerId = event.container.id ;
      const container = this.tripObj[containerId] ;
      console.log('fetch container' , container );
      const obj = container.tripArrayData[event.currentIndex] ;
      const timeObj = container.tripArrayData[event.currentIndex + 1] ;
      obj.active =  true ;
      obj.rowDisable = false ;
      // console.log(event.container.id);

      container.tripArrayData[event.currentIndex] =  {...timeObj , ...obj} ;

      container.tripArrayData.splice(event.currentIndex + 1 , 1);



    }
  }

}
