<template>
	<h4>座位说明</h4>
  <div class="w3-row-padding w3-padding-16">
	  <div class="w3-quarter">
	  	<img src="./img/chair-0.png" width="24"  /><i class="w3-small">可选座位</i>
		</div>
	  <div class="w3-quarter">
	  	<img src="./img/chair-1.png" width="24"  /><i class="w3-small">{{ this.$parent.seat_ranks['1'].Name }} (${{ this.$parent.seat_ranks['1'].Price }})</i>
	  </div>
	  <div class="w3-quarter">
	  	<img src="./img/chair-2.png" width="24"  /><i class="w3-small">{{ this.$parent.seat_ranks['2'].Name }} (${{ this.$parent.seat_ranks['2'].Price }})</i>
		</div>
	  <div class="w3-quarter">
	  	<img src="./img/chair-3.png" width="24"  /><i class="w3-small">{{ this.$parent.seat_ranks['3'].Name }} (${{ this.$parent.seat_ranks['3'].Price }})</i>
		</div>
	</div>
  <div class="w3-center w3-padding-24">
    <table  style="max-width:100%;width:auto;margin: 0 auto;" class="w3-border w3-centered">
      <tbody>
      <tr v-for="row in seat_area_selected.Rows">
        <td width="24" class="w3-theme-dark">{{ row.Name }}</td>
        <td width="24" v-for="seat in row.Seats">
        	<div v-if="!seat.NoSeat && !seat.WheelChair">
  	        <div @click="choose_seat(row,seat)">
  	          <img class="" v-if="seat.Occupied || is_selected(row,seat)" width="24" v-bind:src="'./img/chair-'+ seat.PriceRank + '.png'"/>
  	          <img v-else width="24" src="./img/chair-0.png"/>
  	        </div>
          </div>
          <div v-if="seat.WheelChair">
            <img width="24" src="./img/wheel-chair.png"/>
          </div>
        </td>      
      </tr>  
      </tbody>  
    </table>
  </div>
</template>

<script>
    export default {
        props:['seat_area_selected'],
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
    };
</script>