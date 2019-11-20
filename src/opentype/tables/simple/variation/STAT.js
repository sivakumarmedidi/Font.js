import { SimpleTable } from "../simple-table.js";
import lazy from "../../../lazy.js";

/**
 * The OpenType `STAT` table.
 *
 * See https://docs.microsoft.com/en-us/typography/opentype/spec/STAT
 */
class STAT extends SimpleTable {
    constructor(dict, dataview) {
        const { p } = super(`STAT`, dict, dataview);
    }
}

export { STAT };
