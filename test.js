const matrix = [
//    -      woff     woff2  
    true,    true,    true,  // otf
    true,    true,    true,  // ttf
    true,    true,    true,  // otf var
    true,    true,    true,  // ttf var
];

// OTF tests

if (matrix.shift()) {
    const otf = new Font(`Adobe Source Code Pro (otf)`);
    otf.onerror = evt => console.error('otf error', evt)
    otf.onload = evt => console.log(`otf`, otf.sfnt.tables.head);
    otf.src = `./test/SourceCodePro-Regular.otf`;
}

if (matrix.shift()) {
    const otfWoff = new Font(`Adobe Source Code Pro (otf woff)`);
    otfWoff.onerror = evt => console.error('otf.woff error', evt)
    otfWoff.onload = evt => console.log(`otf.woff`, otfWoff.woff.tables.head);
    otfWoff.src = `./test/SourceCodePro-Regular.otf.woff`;
}

if (matrix.shift()) {
    const otfWoff2 = new Font(`Adobe Source Code Pro (otf woff2)`);
    otfWoff2.onerror = evt => console.error('otf.woff2 error', evt)
    otfWoff2.onload = evt => console.log(`otf.woff2`, otfWoff2.woff2.tables.head);
    otfWoff2.src = `./test/SourceCodePro-Regular.otf.woff2`;
}
    // TTF tests

if (matrix.shift()) {
    const ttf = new Font(`Adobe Source Code Pro (ttf)`);
    ttf.onerror = evt => console.error('ttf error', evt)
    ttf.onload = evt => console.log(`ttf`, ttf.sfnt.tables.head);
    ttf.src = `./test/SourceCodePro-Regular.ttf`;
}

if (matrix.shift()) {
    const ttfWoff = new Font(`Adobe Source Code Pro (ttf woff)`);
    ttfWoff.onerror = evt => console.error('ttf.woff error', evt)
    ttfWoff.onload = evt => console.log(`ttf.woff`, ttfWoff.woff.tables.head);
    ttfWoff.src = `./test/SourceCodePro-Regular.ttf.woff`;
}

if (matrix.shift()) {
    const ttfWoff2 = new Font(`Adobe Source Code Pro (ttf woff2)`);
    ttfWoff2.onerror = evt => console.error('ttf.woff2 error', evt)
    ttfWoff2.onload = evt => console.log(`ttf.woff2`, ttfWoff2.woff2.tables.head);
    ttfWoff2.src = `./test/SourceCodePro-Regular.ttf.woff2`;
}
    // OTF variable font tests

if (matrix.shift()) {
    const varOtf = new Font(`Adobe Source Code Pro (otf)`);
    varOtf.onerror = evt => console.error('otf (var) error', evt)
    varOtf.onload = evt => console.log(`otf (var)`, varOtf.sfnt.tables.head);
    varOtf.src = `./test/SourceCodeVariable-Roman.otf`;
}

if (matrix.shift()) {
    const varOtfWoff = new Font(`Adobe Source Code Pro (variable otf woff)`);
    varOtfWoff.onerror = evt => console.error('otf.woff (var) error', evt)
    varOtfWoff.onload = evt => console.log(`otf.woff (var)`, varOtfWoff.woff.tables.head);
    varOtfWoff.src = `./test/SourceCodeVariable-Roman.otf.woff`;
}

if (matrix.shift()) {
    const varOtfWoff2 = new Font(`Adobe Source Code Pro (variable otf woff2)`);
    varOtfWoff2.onerror = evt => console.error('otf.woff2 (var) error', evt)
    varOtfWoff2.onload = evt => console.log(`otf.woff2 (var)`, varOtfWoff2.woff2.tables.head);
    varOtfWoff2.src = `./test/SourceCodeVariable-Roman.otf.woff2`;
}
    // TTF variable font tests

if (matrix.shift()) {
    const varTTf = new Font(`Adobe Source Code Pro (ttf)`);
    varTTf.onerror = evt => console.error('ttf (var)error', evt)
    varTTf.onload = evt => console.log(`ttf (var)`, varTTf.sfnt.tables.head);
    varTTf.src = `./test/SourceCodeVariable-Roman.ttf`;
}

if (matrix.shift()) {
    const varTTfWoff = new Font(`Adobe Source Code Pro (variable ttf woff)`);
    varTTfWoff.onerror = evt => console.error('ttf.woff (var)error', evt)
    varTTfWoff.onload = evt => console.log(`ttf.woff (var)`, varTTfWoff.woff.tables.head);
    varTTfWoff.src = `./test/SourceCodeVariable-Roman.ttf.woff`;
}

if (matrix.shift()) {
    const varTTfWoff2 = new Font(`Adobe Source Code Pro (variable ttf woff2)`);
    varTTfWoff2.onerror = evt => console.error('ttf.woff2 (var) error', evt)
    varTTfWoff2.onload = evt => console.log(`ttf.woff2 (var)`, varTTfWoff2.woff2.tables.head);
    varTTfWoff2.src = `./test/SourceCodeVariable-Roman.ttf.woff2`;
}
