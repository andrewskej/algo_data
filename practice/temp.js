// Create a javascript function using typescript that only returns shifts that don't interfere with the users currently selected shifts.
// https://www.notion.so/Opslock-Interview-0a2593d4c53049d4829359fc685836ef

// Maybe I need to find something not interfering for ALL the shifts the user has??
const usershifts = [
	{
		start: '0600',
		end: '1000'
	},
	{
		start: '1600',
		end: '2000'
	}
];



const globalShiftList = [
	{
		start: '0000',
		end: '2359'
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
// if I understood this part wrong, well then....
console.log(shiftCheck(0))


//WIP!!! 
function shiftCheckAll(all, mine){
   const alignedAll = all.sort((a, b) => a.start - b.start);

   console.log('given:', ...mine.map(el => el))

   const c = []
   for(let i =0; i<mine.length; i++){
       const a = alignedAll.filter(all => all.start > mine[i].end)
       const b = alignedAll.filter(all => all.end <= mine[i].start)
       c.push(...[...a, ...b])
   }

   console.log(c)
}

console.log(shiftCheckAll(globalShiftList, usershifts))