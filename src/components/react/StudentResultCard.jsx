/**
 * @typedef SubjectResult
 * @prop {string} subject_name
 * @prop {string} subject_result
 */

/**
 * @typedef Details
 * @prop {string} name
 * @prop {string} index_no
 * @prop {string} nic
 * @prop {number} district_rank
 * @prop {number} island_rank
 * @prop {number} z_score
 * @prop {string} subject_stream
 * @prop {SubjectResult[]} subjects
 */

/**
 * @typedef Props
 * @prop {Details} details
 */

/**
 * @param {Props} props
 */
export function StudentResultCard({ details }) {
	return (
		<table>
			<tr>
				<td>Name</td>
				<td>{details.name}</td>
			</tr>
			<tr>
				<td>Index No</td>
				<td>{details.index_no}</td>
			</tr>
			<tr>
				<td>District Rank</td>
				<td>{details.district_rank}</td>
			</tr>
			<tr>
				<td>Island Rank</td>
				<td>{details.island_rank}</td>
			</tr>
		</table>
	);
}
