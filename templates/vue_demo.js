// extend and register in one step
Vue.component('seats', {
  template: '#seats-template',
  props: ['seat_area_selected'],
  methods:{
    choose_seat:function(row,seat){
      if(!seat.Occupied){
        if( this.$parent.seat_selected[seat.PriceRank].indexOf(row.Name+seat.Col)<0 ){
          this.$parent.seat_selected[seat.PriceRank].push(row.Name+seat.Col);        
        }else{
          this.$parent.seat_selected[seat.PriceRank].splice(this.$parent.seat_selected[seat.PriceRank].indexOf(row.Name+seat.Col), 1);
        }
      }
    },
    is_selected:function(row,seat){
      if( this.$parent.seat_selected[seat.PriceRank].indexOf(row.Name+seat.Col)<0 ){
        return false;
      }else{
        return true;
      }
    },
  },
})



var vue = new Vue({
  el:'#app',
  data:{
    event_place:'Melbourne Convention and Exhibition Centre',
    event_intro:'德云社是中国首屈一指的相声团体，由郭德纲，于谦等200余位相声演员共同组成。在中国数个城市拥有分社及小剧场，同时在2012年正式于墨尔本成立首个德云社海外分社。 德云社相声2011年第一次海外巡演，第一站就是墨尔本，当年这一演出被誉为中国相声的海外破冰之旅，墨尔本也成了中国相声海外重镇。从2011年开始，每年德云社都会在澳洲做公开演出，今年是第五年，此次巡回，郭德纲及于谦将携其他五组德云社相声演员为大家呈现一场高水准的相声演出。',
    event_seat_image:'http://d2o50i5c2dr30a.cloudfront.net/797de82d-7ae1-441c-a2b0-61a7a8747f51.jpg',
    event_times:['2016年10月08日（周六） 20:10','2016年10月09日（周日） 20:10'],
    is_event_time_selected:false,
    event_time_selected:'',
    seat_areas:[
                {'Name':'Area A','Rows':[ 
                												{'Name':'H', 'Seats':[{'Col':'1','PriceRank':'3','Occupied':false},
                                                              {'Col':'2','PriceRank':'3','Occupied':false},
                                                              {'Col':'3','PriceRank':'3','Occupied':false},
                                                              {'Col':'4','PriceRank':'3','Occupied':true},
                                                              {'Col':'5','PriceRank':'3','Occupied':true},
                                                              {'Col':'6','PriceRank':'3','Occupied':false},
                                                              {'NoSeat':true},
                                                              {'Col':'8','PriceRank':'3','Occupied':false},
                                                              {'Col':'9','PriceRank':'3','Occupied':false},
                                                              {'Col':'10','PriceRank':'3','Occupied':false},
                                                              {'Col':'11','PriceRank':'3','Occupied':false},
                                                              {'Col':'12','PriceRank':'3','Occupied':true},
                                                              {'WheelChair':true},
                                                              {'WheelChair':true},                                                             
                                                              {'NoSeat':true},
                                                              {'NoSeat':true},
                                                              ] },
                												{'Name':'I', 'Seats':[{'Col':'1','PriceRank':'3','Occupied':false},
                                                              {'Col':'2','PriceRank':'3','Occupied':false},
                                                              {'Col':'3','PriceRank':'3','Occupied':false},
                                                              {'Col':'4','PriceRank':'3','Occupied':true},
                                                              {'Col':'5','PriceRank':'3','Occupied':true},
                                                              {'Col':'6','PriceRank':'3','Occupied':false},
                                                              {'NoSeat':true},
                                                              {'Col':'8','PriceRank':'3','Occupied':false},
                                                              {'Col':'9','PriceRank':'3','Occupied':false},
                                                              {'Col':'10','PriceRank':'3','Occupied':false},
                                                              {'Col':'11','PriceRank':'3','Occupied':false},
                                                              {'Col':'12','PriceRank':'3','Occupied':true},
                                                              {'Col':'13','PriceRank':'3','Occupied':true},
                                                              {'Col':'14','PriceRank':'3','Occupied':false},                                                             
                                                              {'NoSeat':true},
                                                              {'NoSeat':true},
                                                              ] },
                                        {'Name':'J', 'Seats':[{'Col':'1','PriceRank':'2','Occupied':false},
                                                              {'Col':'2','PriceRank':'2','Occupied':false},
                                                              {'Col':'3','PriceRank':'2','Occupied':false},
                                                              {'Col':'4','PriceRank':'2','Occupied':true},
                                                              {'Col':'5','PriceRank':'2','Occupied':true},
                                                              {'Col':'6','PriceRank':'2','Occupied':false},
                                                              {'NoSeat':true},
                                                              {'Col':'8','PriceRank':'2','Occupied':false},
                                                              {'Col':'9','PriceRank':'2','Occupied':false},
                                                              {'Col':'10','PriceRank':'2','Occupied':false},
                                                              {'Col':'11','PriceRank':'2','Occupied':false},
                                                              {'Col':'12','PriceRank':'2','Occupied':true},
                                                              {'Col':'13','PriceRank':'2','Occupied':true},
                                                              {'Col':'14','PriceRank':'2','Occupied':false},                                                             
                                                              {'NoSeat':true},
                                                              {'NoSeat':true},
                                                              ] },
                                        {'Name':'K', 'Seats':[{'Col':'1','PriceRank':'2','Occupied':false},
                                                              {'Col':'2','PriceRank':'2','Occupied':false},
                                                              {'Col':'3','PriceRank':'2','Occupied':true},
                                                              {'Col':'4','PriceRank':'2','Occupied':true},
                                                              {'Col':'5','PriceRank':'2','Occupied':false},
                                                              {'Col':'6','PriceRank':'2','Occupied':false},
                                                              {'NoSeat':true},
                                                              {'Col':'8','PriceRank':'2','Occupied':true},
                                                              {'Col':'9','PriceRank':'2','Occupied':true},
                                                              {'Col':'10','PriceRank':'2','Occupied':false},
                                                              {'Col':'11','PriceRank':'2','Occupied':false},
                                                              {'Col':'12','PriceRank':'2','Occupied':true},
                                                              {'Col':'13','PriceRank':'2','Occupied':true},
                                                              {'Col':'14','PriceRank':'2','Occupied':false},
                                                              {'Col':'15','PriceRank':'2','Occupied':false},
                                                              {'Col':'16','PriceRank':'2','Occupied':false},                                                              
                                                              ] },
                                        {'Name':'L', 'Seats':[{'Col':'1','PriceRank':'1','Occupied':false},
                                                              {'Col':'2','PriceRank':'1','Occupied':false},
                                                              {'Col':'3','PriceRank':'1','Occupied':false},
                                                              {'Col':'4','PriceRank':'1','Occupied':false},
                                                              {'Col':'5','PriceRank':'1','Occupied':true},
                                                              {'Col':'6','PriceRank':'1','Occupied':true},
                                                              {'NoSeat':true},
                                                              {'Col':'8','PriceRank':'1','Occupied':true},
                                                              {'Col':'9','PriceRank':'1','Occupied':true},
                                                              {'Col':'10','PriceRank':'1','Occupied':false},
                                                              {'Col':'11','PriceRank':'1','Occupied':false},
                                                              {'Col':'12','PriceRank':'1','Occupied':true},
                                                              {'Col':'13','PriceRank':'1','Occupied':true},
                                                              {'Col':'14','PriceRank':'1','Occupied':false},
                                                              {'Col':'15','PriceRank':'1','Occupied':false},
                                                              {'Col':'16','PriceRank':'1','Occupied':false},                                                              
                                                              ] },
                                          ] },
                {'Name':'Area B','Rows':[ 
                                        {'Name':'M', 'Seats':[{'Col':'1','PriceRank':'3','Occupied':false},
                                                              {'Col':'2','PriceRank':'3','Occupied':false},
                                                              {'Col':'3','PriceRank':'3','Occupied':false},
                                                              {'Col':'4','PriceRank':'3','Occupied':false},
                                                              {'Col':'5','PriceRank':'3','Occupied':false},
                                                              ] },
                                        {'Name':'N', 'Seats':[{'Col':'1','PriceRank':'2','Occupied':false},
                                                              {'Col':'2','PriceRank':'2','Occupied':false},
                                                              {'Col':'3','PriceRank':'2','Occupied':true},
                                                              {'Col':'4','PriceRank':'2','Occupied':true},
                                                              {'Col':'5','PriceRank':'2','Occupied':false},
                                                              ] },
                                        {'Name':'O', 'Seats':[{'Col':'1','PriceRank':'1','Occupied':false},
                                                              {'Col':'2','PriceRank':'1','Occupied':false},
                                                              {'Col':'3','PriceRank':'1','Occupied':false},
                                                              {'Col':'4','PriceRank':'1','Occupied':false},
                                                              {'Col':'5','PriceRank':'1','Occupied':false},
                                                              ] },
                                          ] },
                {'Name':'Area C','Rows':[ 
                                        {'Name':'P', 'Seats':[{'Col':'1','PriceRank':'3','Occupied':false},
                                                              {'Col':'2','PriceRank':'3','Occupied':false},
                                                              {'Col':'3','PriceRank':'3','Occupied':false},
                                                              {'Col':'4','PriceRank':'3','Occupied':true},
                                                              {'Col':'5','PriceRank':'3','Occupied':false},
                                                              {'Col':'6','PriceRank':'3','Occupied':false},
                                                              ] },
                                        {'Name':'Q', 'Seats':[{'Col':'1','PriceRank':'2','Occupied':false},
                                                              {'Col':'2','PriceRank':'2','Occupied':false},
                                                              {'Col':'3','PriceRank':'2','Occupied':true},
                                                              {'Col':'4','PriceRank':'2','Occupied':true},
                                                              {'Col':'5','PriceRank':'2','Occupied':false},
                                                              {'Col':'6','PriceRank':'2','Occupied':false},
                                                              ] },
                                        {'Name':'R', 'Seats':[{'Col':'1','PriceRank':'1','Occupied':false},
                                                              {'Col':'2','PriceRank':'1','Occupied':false},
                                                              {'Col':'3','PriceRank':'1','Occupied':false},
                                                              {'Col':'4','PriceRank':'1','Occupied':false},
                                                              {'Col':'5','PriceRank':'1','Occupied':false},
                                                              {'Col':'6','PriceRank':'1','Occupied':false},
                                                              ] },
                                        {'Name':'S', 'Seats':[{'Col':'1','PriceRank':'1','Occupied':false},
                                                              {'Col':'2','PriceRank':'1','Occupied':false},
                                                              {'Col':'3','PriceRank':'1','Occupied':false},
                                                              {'Col':'4','PriceRank':'1','Occupied':false},
                                                              {'NoSeat':true},
                                                              {'NoSeat':true},
                                                              ] },
                                          ] },                                         
                ],
    is_seat_area_selected:false,
    seat_area_selected:'',
    seat_ranks:{
                '1':{'Name':'二等','Price':60},
                '2':{'Name':'一等','Price':80},
                '3':{'Name':'VIP','Price':100}
                },
    seat_selected:{'1':[],'2':[],'3':[]},      
  },
  computed: {
    subtotal_1:function(){
      return this.seat_ranks['1'].Price * this.seat_selected['1'].length;
    },
    subtotal_2:function(){
      return this.seat_ranks['2'].Price * this.seat_selected['2'].length;
    },
    subtotal_3:function(){
      return this.seat_ranks['3'].Price * this.seat_selected['3'].length;
    },
    total_amt:function(){
      return this.subtotal_1 + this.subtotal_2 + this.subtotal_3;
    },
  },
  methods:{
  	delete_ticket:function(seat,rank){
  		if( this.seat_selected[rank].indexOf(seat) >= 0 ){
				this.seat_selected[rank].splice(this.seat_selected[rank].indexOf(seat),1);
  		}
  	}
  },
    
});
