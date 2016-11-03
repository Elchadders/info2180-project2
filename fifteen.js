"use strict";

var div;

var areaY;

var areaX;




window.onload = function ()

{

	var puzzlearea = document.getElementById('puzzlearea');

	

	div = puzzlearea.getElementsByTagName('div');



	for (var i=0; i<div.length; i++)

	{

		div[i].className = 'puzzlepiece';

		div[i].style.left = (i%4*100)+'px';

		div[i].style.top = (parseInt(i/4)*100) + 'px';

		div[i].style.backgroundPosition= '-' + div[i].style.left + ' ' + '-' + div[i].style.top;

		div[i].onmouseover = function()

		{

			if (checkCanMove(parseInt(this.innerHTML)))

			{

				this.style.border = "3px solid black";

				

                this.style.backgroundImage="url('http://www.webdesignsolution.org/wp-content/uploads/2015/06/wordpress-hyderabad.jpg')"; 



			}

		};

		div[i].onmouseout = function()

		{

			this.style.border = "5px solid black";

			

		};



		div[i].onclick = function()

		{

			if (checkCanMove(parseInt(this.innerHTML)))

			{

				swap(this.innerHTML-1);

				if (checkFinish())

				{

					youWin();

				}

				return;

			}

		};

	}



	areaX = '300px';

	areaY = '300px';



	var shufflebutton = document.getElementById('shufflebutton');

	shufflebutton.onclick = function()

	{



		for (var i=0; i<250; i++)

		{

			var rand = parseInt(Math.random()* 100) %4;

			if (rand == 0)

			{

				var tmp = calcUp(areaX, areaY);

				if ( tmp != -1)

				{

					swap(tmp);

				}

			}

			if (rand == 1)

			{

				var tmp = calcDown(areaX, areaY);

				if ( tmp != -1) 

				{

					swap(tmp);

				}

			}



			if (rand == 2)

			{

				var tmp = calcLeft(areaX, areaY);

				if ( tmp != -1)

				{

					swap(tmp);

				}

			}



			if (rand == 3)

			{

				var tmp = calcRight(areaX, areaY);

				if (tmp != -1)

				{

					swap(tmp);

				}

			}

		}

	};

};



function checkCanMove(position)

{

	if (calcLeft(areaX, areaY) == (position-1))

	{

		return true;

	}



	if (calcDown(areaX, areaY) == (position-1))

	{

		return true;

	}



	if (calcUp(areaX, areaY) == (position-1))

	{

		return true;

	}



	if (calcRight(areaX, areaY) == (position-1))

	{

		return true;

	}

}

function calcLeft(x, y)

{

	var xx = parseInt(x);

	var yy = parseInt(y);



	if (xx > 0)

	{

		for (var i = 0; i < div.length; i++) 

		{

			if (parseInt(div[i].style.left) + 100 == xx && parseInt(div[i].style.top) == yy)

			{

				return i;

			} 

		}

	}

	else 

	{

		return -1;

	}

}



function calcRight (x, y) {

	var xx = parseInt(x);

	var yy = parseInt(y);

	if (xx < 300)

	{

		for (var i =0; i<div.length; i++){

			if (parseInt(div[i].style.left) - 100 == xx && parseInt(div[i].style.top) == yy) 

			{

				return i;

			}

		}

	}

	else

	{

		return -1;

	} 

}



function calcUp (x, y) {

	var xx = parseInt(x);

	var yy = parseInt(y);

	if (yy > 0)

	{

		for (var i=0; i<div.length; i++)

		{

			if (parseInt(div[i].style.top) + 100 == yy && parseInt(div[i].style.left) == xx) 

			{

				return i;

			}

		} 

	}

	else 

	{

		return -1;

	}

}



function calcDown (x, y)

{

	var xx = parseInt(x);

	var yy = parseInt(y);

	if (yy < 300)

	{

		for (var i=0; i<div.length; i++)

		{

			if (parseInt(div[i].style.top) - 100 == yy && parseInt(div[i].style.left) == xx) 

			{

				return i;

			}

		}

	}

	else

	{

		return -1;

	} 

}


function swap (position) {

	var temp = div[position].style.top;

	div[position].style.top = areaY;

	areaY = temp;



	temp = div[position].style.left;

	div[position].style.left = areaX;

	areaX = temp;

}


