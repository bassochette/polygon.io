// CF: https://polygon.io/docs/crypto/get_v2_aggs_ticker__cryptoTicker__range__multiplier___timespan___from___to

import { IGet, IRequestOptions } from "../transport/request";
import { IAggsQuery, IAggs } from "../stocks/aggregates";

export const aggregates = async (
  get: IGet,
  ticker: string,
  multiplier: number,
  timespan: string,
  from: string,
  to: string,
  query?: IAggsQuery,
  options?: IRequestOptions,
): Promise<IAggs> =>
  get(`/v2/aggs/ticker/${ticker}/range/${multiplier}/${timespan}/${from}/${to}`,
    query,
    options
  );
