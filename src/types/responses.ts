export type Edpk = {
  brojNaloga: number;
  opazen: number;
  pozNaBr: string;
  zaUplatu: number;
};

export type PSResponse = {
  edpkList: Edpk[];
  voziloNaDepou: boolean;
};
