// Conseguir carta del crupier
	let dealerInput = document.getElementsByName('crupier');
	let dealerValue;
	function dealerCard() {
		for(i = 0; i < dealerInput.length; i++) {
			if(dealerInput[i].checked) {
				dealerValue = dealerInput[i].value;
			}
		}
		return dealerValue;
	}

// Conseguir mano del jugador
	let playerInput = document.getElementsByName('player');
	let playerValue;
	function playerCard() {
		for(i = 0; i < playerInput.length; i++) {
			if(playerInput[i].checked) {
				playerValue = playerInput[i].value;
			}
		}
		return playerValue;
	}

// Concatenar mano del jugador y carta del crupier
	function blackJackHand() {
		return playerCard() + dealerCard();
	}


// Datos a comparar con el resultado de blackJackHand()
	const doblar = ['93', '94', '95', '96', '102', '103', '104', '105', '106', '107', '108', '109', '112', '113', '114', '115', 
					'116', '117', '118', '119', '1110', 'A25', 'A26', 'A35', 'A36', 'A44', 'A45', 'A46', 'A54', 'A55', 'A56', 'A63', 
					'A64', 'A65', 'A66', '552', '553', '554', '555', '556', '557', '558', '559' ];

	const quedarse = ['124', '125', '126', '132', '133', '134', '135', '136', '142', '143', '144', '145', '146', '152', '153', '154', 
					'155', '156', '162', '163', '164', '165', '166', '172', '173', '174', '175', '176', '177', '178', '179', '1710', 
					'17A', 'A72', 'A77', 'A78', 'A82', 'A83', 'A84', 'A85', 'A86', 'A87', 'A88', 'A89', 'A810', 'A8A', 'A92', 'A93', 
					'A94', 'A95', 'A96', 'A97', 'A98', 'A99', 'A910', 'A9A', '996', '999', '9910', '99A', '10102', '10103', '10104', 
					'10105', '10106', '10107', '10108', '10109', '101010', '1010A'];

	const separar = ['224', '225', '226', '227', '334', '335', '336', '337', '663', '664', '665', '666', '772', '773', '774', '775', 
					'776', '777', '882', '883', '884', '885', '886', '887', '888', '889', '8810', '88A', '992', '993', '994', '995', 
					'997', '998', 'AA2', 'AA3', 'AA4', 'AA5', 'AA6', 'AA7', 'AA8', 'AA9', 'AA10', 'AAA'];

	const rendirsePedir = ['1510', '169', '1610', '16A'];

	const doblarQuedarse = ['A73', 'A74', 'A75', 'A76'];

	const separarPedir = ['222', '223', '332', '333', '445', '446', '662'];


// Determina el resultado final
	let inputResultado = document.getElementById('resultado');
	function blackJackResult() {
		if(doblar.indexOf(blackJackHand()) !== -1 ) {
			inputResultado.innerHTML = '<p>Doblar</p>';
		} else if (quedarse.indexOf(blackJackHand()) !== -1 ) {
			inputResultado.innerHTML = '<p>Quedarse</p>';
		} else if (separar.indexOf(blackJackHand()) !== -1 ) {
			inputResultado.innerHTML = '<p>Separar</p>';
		} else if (rendirsePedir.indexOf(blackJackHand()) !== -1 ) {
			inputResultado.innerHTML = '<p>Rendirse si se permte, si no Pedir</p>';
		} else if (doblarQuedarse.indexOf(blackJackHand()) !== -1 ) {
			inputResultado.innerHTML = '<p>Doblar si se permite, si no Quedarse</p>';
		} else if (separarPedir.indexOf(blackJackHand()) !== -1 ) {
			inputResultado.innerHTML = '<p>Separar si se permite Doblar después, si no Pedir</p>';
		} else {
			inputResultado.innerHTML = '<p>Pedir</p>';
		}
	}

// Reset de la calculadora
	function blackJackReset() {
		// Reset de la carta del crupier
		for(i = 0; i < dealerInput.length; i++) {
			dealerInput[i].checked = false;
		}

		// Reset de la mano del jugador
		for(j = 0; j < playerInput.length; j++) {
			playerInput[j].checked = false;
		}

		// Reset del resultado
		inputResultado.innerHTML = '';
	} 