var array=[1,2,3,-4,5,-6,7,-9];
var a1=[];
function convert(array)
	{
	for(i=0; i<array.length; i++)
		{
		if(array[i]<0)
			{
			a1.push(Math.abs(array[i]));
			}
		}
		return a1;
		
	}
	console.log(convert(array));