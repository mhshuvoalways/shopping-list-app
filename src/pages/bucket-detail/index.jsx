import Nav from '../../components/nav';
import Create from '../../components/create';
import ItemTable from '../../components/table/ItemTable';
import CompletedTable from '../../components/table/CompletedTable';

function BucketDetailPage() {
	return (
		<div>
			{/* Navigation Bar */}
			<Nav />
			{/* Main Content Body */}
			<main className='container __margin--ylg'>
				{/* Create New Item */}
				<Create extra label='Add New Item' />
				{/* Item Table */}
				<section className='section table __shadow--sm'>
					<ItemTable />
				</section>
				{/* Item Table Completed */}
				<section className='section table table--success __shadow--sm'>
					<CompletedTable />
				</section>
			</main>
		</div>
	);
}

export default BucketDetailPage;
