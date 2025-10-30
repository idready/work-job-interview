
export interface IamTheTestInterface {
    GetSuggestions(term: String, choices: String[], numberOfSuggestions: number): WordCandidate[];
}

export type WordCandidate = { diff: number; lenDiff: number; value: string }