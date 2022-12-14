export interface FormResponse {
	url: string,
	formid: string,
	metadata: [],
	owner: string,
	public: boolean,
	public_data: boolean,
	require_auth: boolean,
	tags: [],
	title: string,
	users: [],
	hash: string,
	has_kpi_hooks: boolean,
	description: string,
	downloadable: boolean,
	encrypted: boolean,
	id_string: string,
	date_created: Date,
	date_modified: Date,
	last_submission_time: Date,
	uuid: string,
	instances_with_geopoints: boolean,
	num_of_submissions: number,
	kpi_asset_uid: string
}