// Each users shift array is formatted like this:
//  [{ start: "0000", end: "0600" }]
//  (each shift time is always a string with 4 characters)
//  Users can define what shifts they are working on in their profile page but we don't want users choosing multiple shifts that interfere with each other.
//   For example: If a user is assigned a shift of 0000 to 0600. 
//   They can't choose a shift that starts at 0400 because that would interfere with one of their shifts.
//   Note: If a shift is from 0000 to 0600, a user can also have a shift that starts at 0600` 
  
//  Problem:Create a javascript function using typescript that only returns shifts that don't interfere with the users currently selected shifts. 


const usershifts = [
	{
		start: '0600',
		end: '1000'
	},
	{
		start: '1600',
		end: '2000'
	},
	{
		start: '1700',
		end:'2100'
	},
	{
		start: '1900',
		end:'2100'
	},
];



const globalShiftList = [
	{
		start: '0000',
		end: '2359'
	},
	{
		start: '0000',
		end: '0400'
	},
	{
		start: '0600',
		end: '1800'
	},
	{
		start: '0000',
		end: '1200'
	},
	{
		start: '0600',
		end: '1200'
	},
	{
		start: '1800',
		end: '2359'
	},
	{
		start: '0000',
		end: '0600'
	},
	{
		start: '1200',
		end: '2359'
	},
	{
		start: '1200',
		end: '1800'
	}
];



//my solution - to find all the shifts that do not interfere of all my shifts
function shiftAllCheck(allCurrentShifts, myCurrentShifts){

	for(let i = 0; i < myCurrentShifts.length; i++){
		//list of noConflicts per shift
		const noConflicts = allCurrentShifts.filter(shift => shift.start > myCurrentShifts[i].end || shift.end <= myCurrentShifts[i].start)

		//list of other shifts than current, to cross Check
		const myOtherShifts = myCurrentShifts.filter(shift => shift !== myCurrentShifts[i])

		//if no more shift left to compare, return the updated allCurrentShifts - or keep comparing it
		return myCurrentShifts.length ? shiftAllCheck(noConflicts, myOtherShifts) : allCurrentShifts
	}

	return allCurrentShifts
}

console.log(shiftAllCheck(globalShiftList, usershifts))




//my solution 2 - to find a list of shifts that do not interfere of my selected shifts 
function shiftCheck(currentIndex){

	if(currentIndex >= usershifts.length || currentIndex <0){
	  return `please choose different shift number bewteen: 0 and ${ usershifts.length-1}`
	}
  
	const {start, end} = usershifts[currentIndex]
	const early = globalShiftList.filter(shift => shift.end <= start)
	const late = globalShiftList.filter(shift => shift.start > end)
	console.log(`current shift:${start}/${end}`)
	
	return [...early, ...late]
  }
  
  // users enter shift number(or index) to choose one shift
  console.log(shiftCheck(0))

