// CF: https://polygon.io/docs/stocks/get_v2_reference_splits__stocksTicker

import { get, IPolygonQuery, IHeaders } from '../transport/request';

export interface IStockSplit {
	execution_date?: string;
	split_from: number;
	split_to: number;
	ticker?: string;
}

export interface IStockSplitsResults {
	next_url?: string;
	request_id?: string;
	results?: IStockSplit[];
	status?: string;
}

export interface IStockSplitsQuery extends IPolygonQuery {
	ticker?: string;
	'ticker.lt'?: string;
	'ticker.lte'?: string;
	'ticker.gt'?: string;
	'ticker.gte'?: string;
	execution_date?: string;
	'execution_date.lt'?: string;
	'execution_date.lte'?: string;
	'execution_date.gt'?: string;
	'execution_date.gte'?: string;
	reverse_split?: 'true' | 'false';
	order?: 'asc' | 'desc';
	limit?: number;
	sort?: 'ticker' | 'execution_date';
}

export const stockSplits = async (
	apiKey: string,
	apiBase: string,
	query?: IStockSplitsQuery,
	headers?: IHeaders
): Promise<IStockSplitsResults> =>
	get(`/v3/reference/splits`, apiKey, apiBase, query, headers);
