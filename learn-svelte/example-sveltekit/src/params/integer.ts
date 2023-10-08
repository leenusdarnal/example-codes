import type { ParamMatcher } from '@sveltejs/kit'
export const match: ParamMatcher = (params) => {
	return /^\d+$/.test(params)
}
