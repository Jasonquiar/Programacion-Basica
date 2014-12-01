var palabra ="tamarindo";
var hombre;


var ahorcado = function (con) 
{
		// "this" es las variables locales de la clase, accecibles en toda la clase
		// "this.comtexto es el contexto del dibujo  del canvas que llega como parametro desde la 
		// variable "con"
		this.contexto = con;
		this.maximo = 5;
		this.intentos = 0;
		this.vivo = true;

		this.dibujar();
}

ahorcado.prototype.dibujar = function ()
{
	var dibujo = this.contexto;

	// Dibujando poste
	dibujo.beginPath()
	dibujo.moveTo(150,100);
	dibujo.lineTo(150,50);
	dibujo.lineTo(400,50);
	dibujo.lineTo(400,350);
	dibujo.strokeStyle = "#000";
	dibujo.lineWidth = 10;
	dibujo.stroke();
	dibujo.closePath();

	if (this.intentos > 0) 

	{
		// dibujar  rostro 
		// intentos = 1 --> rostro - radianes - circulo
		dibujo.beginPath();
		// parametros. 1 posicion, 2. radio, 3. radianes arranca, 4 radianes termnia, 5 manecillas de relog
		dibujo.arc(150,140,40,0, Math.PI * 2, false);
		dibujo.strokeStyle = "red";
		dibujo.lineWidth = 5;
		dibujo.stroke();
		dibujo.closePath();

		// dibujar torso
		// intento = 2
		if (this.intentos > 1) 
		{
			dibujo.beginPath()
			dibujo.moveTo(150,180);
			dibujo.lineTo(150,250);
			dibujo.strokeStyle = "red";
			dibujo.lineWidth = 5;
			dibujo.stroke();
			dibujo.closePath();

			// dibujar brazos
			// intento = 3
			if (this.intentos > 2) 
			{
				dibujo.beginPath()
				dibujo.moveTo(120,220);
				dibujo.lineTo(150,180);
				dibujo.lineTo(180,220);
				dibujo.strokeStyle = "red";
				dibujo.lineWidth = 5;
				dibujo.stroke();
				dibujo.closePath();

				// dibujar Piernas
				// intento = 4
				if (this.intentos > 3) 
				{
					dibujo.beginPath()
					dibujo.moveTo(120,290);
					dibujo.lineTo(150,250);
					dibujo.lineTo(180,290);
					dibujo.strokeStyle = "red";
					dibujo.lineWidth = 5;
					dibujo.stroke();
					dibujo.closePath();


					// dibujar ojos muertos
					// intento = 5
					if (this.intentos > 4) 
					{

						// ojos izquierdo
						dibujo.beginPath()
						dibujo.moveTo(125,120);
						dibujo.lineTo(145,145);
						dibujo.moveTo(145,120)
						dibujo.lineTo(125,145);

						// ojo derecho
						dibujo.moveTo(155,120);
						dibujo.lineTo(175,145);
						dibujo.moveTo(175,120);
						dibujo.lineTo(155,145);

						dibujo.strokeStyle = "blue";
						dibujo.lineWidth = 5;
						dibujo.stroke();
						dibujo.closePath();
					};
				};
			};
		};
	};

}

ahorcado.prototype.trazar = function ()
{
	this.intentos ++;
	 if (this.intentos >= this.maximo) 
	 {
	 	this.vivo = false;
	 }
	 this.dibujar();
}


function inicio() 

{
	var canvas = document.getElementById("c")
	canvas.width = 500;
	canvas.height = 400;
	var contexto = canvas.getContext("2d")
	var hombre = new ahorcado(contexto);
	hombre.trazar();
	hombre.trazar();
	hombre.trazar();
	hombre.trazar();
	hombre.trazar();

}



	