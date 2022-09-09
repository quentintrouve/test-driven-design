// index.js
interface CashbackType {
    '500': number,
    '200': number,
    '100': number,
    '50': number,
    '20': number,
    '10': number
}


export default function cashBack(amount: number): CashbackType {

	if(amount <= 0 && amount % 10 !== 0) return null

	const billsValues = [500, 200, 100, 50, 20, 10]
	const billsList = {
		'500': 0,
		'200': 0,
		'100': 0,
		'50': 0,
		'20': 0,
		'10': 0
	}

    
	if (billsValues.includes(amount)) {
		return { ...billsList, [`${amount}`]: 1 }
	} else {

		const lastDivisor = billsValues.reduce((prevValue, currentValue) => {
			const divisor = Math.floor(prevValue / currentValue)
			billsList[`${currentValue}`] = divisor

			return prevValue - currentValue * divisor
		}, amount)

		return lastDivisor === 0 ? billsList : null

	}
}