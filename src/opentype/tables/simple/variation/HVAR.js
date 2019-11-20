import { SimpleTable } from "../simple-table.js";
import lazy from "../../../lazy.js";

/**
 * The OpenType `HVAR` table.
 *
 * See https://docs.microsoft.com/en-us/typography/opentype/spec/HVAR
 */
class HVAR extends SimpleTable {
    constructor(dict, dataview) {
        const { p } = super(`HVAR`, dict, dataview);
    }
}

export { HVAR };
