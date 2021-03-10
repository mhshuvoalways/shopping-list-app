import Nav from '../../components/nav'
import Create from '../../components/create'
import Table from '../../components/table'

function BucketPage() {
	return (
		<div>
			{/* Navigation Bar */}
			<Nav />
			{/* Main Content Body */}
			<main className='container __margin--ylg'>
				{/* Add New Bucket Section */}
				<Create label='Create New Bucket' />
				{/* Buckets Table */}
				<div className='section table __shadow--sm'>
					<Table />
				</div>
			</main>
		</div>
	)
}

export default BucketPage



// const buckets = [
// 	{
// 		name: 'bucket1',
// 		cost: 434,
// 		date: new Date(),
// 		// items: [
// 		// 	{
// 		// 		id: 1,
// 		// 		name: 'egg',
// 		// 		price: 354,
// 		// 		isCompact: false
// 		// 	}
// 		// ]
// 		items: [1, 2]
// 	}
// ]

// const items = [
// 	{
// 		id: 1,
// 		name: 'egg',
// 		price: 354,
// 		isCompact: false
// 	},
// 	{
// 		id: 2,
// 		name: 'egg',
// 		price: 354,
// 		isCompact: false
// 	}
// ]