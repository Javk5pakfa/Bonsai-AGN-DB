import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React from "react";

// Uses react-tabs https://www.npmjs.com/package/react-tabs

// Source catalog descriptions.
const references = [
    // {name: "name1", catalog: "catalog1", ref: "link", refLink: "https://www.google.com"},
    {catalog: "2MRS", name: "2MRS_AGN.fit", ref: "Zaw+19", refLink: "https://ui.adsabs.harvard.edu/abs/2019ApJ...872..134Z/abstract"},
    {catalog: "2QZ", name: "2QZ.fit", ref: "Croom+04", refLink: "https://ui.adsabs.harvard.edu/abs/2004ApJ...606..126C/abstract"},
    {catalog: "2SLAQ", name: "2slaqqso.fit", ref: "Croom+04", refLink: "https://ui.adsabs.harvard.edu/abs/2004MNRAS.349.1397C/abstract"},
    {catalog: "3FGL Fermi cleanups", name: "3FGL2.fits", ref: "Paiano+19", refLink: "https://ui.adsabs.harvard.edu/abs/2019ApJ...871..162P/abstract"},
    {catalog: "3LAC", name: "3LAC_highlat.fit, 3LAC_lowlat.fit, 3LAC_table7.fit", ref: "Acero+15", refLink: "https://ui.adsabs.harvard.edu/abs/2015ApJS..218...23A/abstract"},
    {catalog: "4XMM_DR10", name: "4XMM_DR10cat_v1.0.fits", ref: "Webb+20", refLink: "https://ui.adsabs.harvard.edu/abs/2020A%26A...641A.136W/abstract"},
    {catalog: "AGNELA", name: "AGNELA.tbl", ref: "Agnello+18", refLink: "https://ui.adsabs.harvard.edu/abs/2018MNRAS.475.2086A/abstract"},
    {catalog: "AKARI_J1757+5907", name: "AKARI_NED.tbl", ref: "Aoki+11", refLink: "https://ui.adsabs.harvard.edu/abs/2011PASJ...63S.457A/abstract"},
    {catalog: "ALMA_decarli", name: "alma_decarli.fits", ref: "Decarli+18", refLink: "https://ui.adsabs.harvard.edu/abs/2018ApJ...854...97D/abstract"},
    {catalog: "ATLAS", name: "ATLAS.fits", ref: "Mao+12", refLink: "https://ui.adsabs.harvard.edu/abs/2012MNRAS.426.3334M/abstract"},
    {catalog: "BAHM", name: "BAHM_NED.fits", ref: "Banerji+15", refLink: "https://ui.adsabs.harvard.edu/abs/2015MNRAS.447.3368B/abstract"},
    {catalog: "BASS", name: "BASS_agns.fit", ref: "Koss+17", refLink: "https://ui.adsabs.harvard.edu/abs/2017ApJ...850...74K/abstract"},
    {catalog: "BAT-105M", name: "BAT-105M.fits", ref: "Oh+18", refLink: "https://ui.adsabs.harvard.edu/abs/2018ApJS..235....4O/abstract"},
    {catalog: "BGGFC", name: "BGGFC_tb1.xlsx, BGGFC_tb2.xlsx", ref: "Boutsia+15", refLink: "https://ui.adsabs.harvard.edu/abs/2018ApJ...869...20B/abstract"},
    {catalog: "BQLS", name: "BQLS.tbl", ref: "More+16", refLink: "https://ui.adsabs.harvard.edu/abs/2016MNRAS.456.1595M/abstract"},
    {catalog: "BZCAT", name: "BZCAT.fit", ref: "Massaro+09", refLink: "https://ui.adsabs.harvard.edu/abs/2009A%26A...495..691M/abstract"},
    {catalog: "C-COSM", name: "C-COSM_catalog.fit", ref: "Marchesi+16", refLink: "https://ui.adsabs.harvard.edu/abs/2016ApJ...817...34M/abstract"},
    {catalog: "CDFS7", name: "CDFS7.fit", ref: "Luo+17", refLink: "https://ui.adsabs.harvard.edu/abs/2017ApJS..228....2L/abstract"},
    {catalog: "CSC2.0", name: "csc2master.fits", ref: "CSC2.0", refLink: "https://cxc.cfa.harvard.edu/csc/"},
    {catalog: "ChaMP", name: "ChaMP.tbl", ref: "Trichas+12", refLink: "https://ui.adsabs.harvard.edu/abs/2012ApJS..200...17T/abstract"},
    {catalog: "DEEP", name: "zcat.deep2.dr4_agn.fits", ref: "Newman+12", refLink: "https://ui.adsabs.harvard.edu/abs/2013ApJS..208....5N/abstract"},
    {catalog: "DR14Q", name: "DR14Q_v4_4.fits", ref: "Paris+18", refLink: "https://ui.adsabs.harvard.edu/abs/2018A%26A...613A..51P/abstract"},
    {catalog: "DR16Q", name: "DR16Q_Superset_v3.fits", ref: "Like+20", refLink: "https://ui.adsabs.harvard.edu/abs/2020ApJS..250....8L/abstract"},
    {catalog: "DUHIZ", name: "DUHIZ_tb2.fits, DUHIZ_tb3.fits", ref: "Wang+17", refLink: "https://ui.adsabs.harvard.edu/abs/2017ApJ...839...27W/abstract"},
    {catalog: "DUz6", name: "DUz6table3.fits, DUz6table6.fits", ref: "Wang+19", refLink: "https://ui.adsabs.harvard.edu/abs/2019ApJ...884...30W/abstract"},
    {catalog: "ELQS-N", name: "ELQS-S.txt", ref: "Schindler+19", refLink: "https://ui.adsabs.harvard.edu/abs/2019ApJ...871..258S/abstract"},
    {catalog: "ELQS-S", name: "ELQS-N.txt", ref: "Schindler+17", refLink: "https://ui.adsabs.harvard.edu/abs/2017ApJ...851...13S/abstract"},
    {catalog: "F2M_REDQSO", name: "F2M_REDQSO.fits", ref: "Urrutia+09", refLink: "https://ui.adsabs.harvard.edu/abs/2009ApJ...698.1095U/abstract"},
    {catalog: "FISCBA", name: "FISCBA.tbl", ref: "Fischer+98", refLink: "https://ui.adsabs.harvard.edu/abs/1998ApJ...503L.127F/abstract"},
    {catalog: "GL-DB", name: "GLDB_tbl2.fits", ref: "Ostrovski+17", refLink: "https://ui.adsabs.harvard.edu/abs/2017MNRAS.465.4325O/abstract"},
    {catalog: "GLIKMAN", name: "glikmanAGN.fits", ref: "Glikman+18", refLink: "https://ui.adsabs.harvard.edu/abs/2018ApJ...861...37G/abstract"},
    {catalog: "GaiaUnwise", name: "Gaia_unWISE_AGNs.fits", ref: "Shu+19", refLink: "https://ui.adsabs.harvard.edu/abs/2019MNRAS.489.4741S/abstract"},
    {catalog: "HAQC", name: "HAQC.fits", ref: "Heintz+16", refLink: "https://ui.adsabs.harvard.edu/abs/2016A%26A...595A..13H/abstract"},
    {catalog: "HEINTZ", name: "HEINTZ.tbl", ref: "Heintz+18", refLink: "https://ui.adsabs.harvard.edu/abs/2018A%26A...615A..43H/abstract"},
    {catalog: "HELLAS2XMM", name: "HELLAS2XMM.fit, HELLAS2XMMe.fit", ref: "Cocchia+07", refLink: "https://ui.adsabs.harvard.edu/abs/2007A%26A...466...31C/abstract"},
    {catalog: "IANTEG", name: "IANTEG_AGN.vot, simbad_agn.vot", ref: "Masetti+13", refLink: "https://ui.adsabs.harvard.edu/abs/2013A%26A...556A.120M/abstract"},
    {catalog: "IBIS", name: "IBIS.fit", ref: "Malizia+12", refLink: "https://ui.adsabs.harvard.edu/abs/2012MNRAS.426.1750M/abstract"},
    {catalog: "IKEDA", name: "IKEDA.tbl, IKEDA_tb1.xlsx, IKEDA_tb2.xlsx", ref: "Ikeda+17", refLink: "https://ui.adsabs.harvard.edu/abs/2017ApJ...846...57I/abstract"},
    {catalog: "KQCG", name: "kqcg.fit", ref: "Liao+19", refLink: "https://ui.adsabs.harvard.edu/abs/2019RAA....19...29L/abstract"},
    {catalog: "LAMDR4", name: "LAMQ4.fits", ref: "LAMOST", refLink: "http://dr4.lamost.org/doc/data-production-description"},
    {catalog: "LAMQ3", name: "LAMQ3_tb12.fit, LAMQ3_tb13.fit", ref: "Dong+18", refLink: "https://ui.adsabs.harvard.edu/abs/2018AJ....155..189D/abstract"},
    {catalog: "LIRAS", name: "LIRAS_hdet1.fit, LIRAS_hdet2.fit, LIRAS_nondet.fit", ref: "Xu+15", refLink: "https://ui.adsabs.harvard.edu/abs/2015ApJS..219...18X/abstract"},
    {catalog: "LSSA", name: "LSSA.tbl", ref: "Lucey+18", refLink: "https://ui.adsabs.harvard.edu/abs/2018MNRAS.476..927L/abstract"},
    {catalog: "LUMIz5", name: "LUMItb3.fits, LUMItb4.fits", ref: "Yang+18", refLink: "https://ui.adsabs.harvard.edu/abs/2018AJ....155..110Y/abstract"},
    {catalog: "MALS-N", name: "MALS-N.fits", ref: "Krogager+18", refLink: "https://ui.adsabs.harvard.edu/abs/2018ApJS..235...10K/abstract"},
    {catalog: "MFJC", name: "MFJC_Sample.fit, MFJC_table5.fit", ref: "McGreer+18", refLink: "https://ui.adsabs.harvard.edu/abs/2018AJ....155..131M/abstract"},
    {catalog: "MHH", name: "MHH.fit", ref: "Meusinger+11", refLink: "https://ui.adsabs.harvard.edu/abs/2011A%26A...525A..37M/abstract"},
    {catalog: "MZZ", name: "MZZ.tbl", ref: "Marano+88", refLink: "https://ui.adsabs.harvard.edu/abs/1988MNRAS.232..111M/abstract"},
    {catalog: "NBCKDE", name: "NBCKDE.fit", ref: "Richards+09", refLink: "https://ui.adsabs.harvard.edu/abs/2009ApJS..180...67R/abstract"},
    {catalog: "NBCKv3", name: "NBCKv3_cand.fit, NBCKv3_master.fit", ref: "Richards+15", refLink: "https://ui.adsabs.harvard.edu/abs/2015ApJS..219...39R/abstract"},
    {catalog: "OVRLAP", name: "OVRLAP.tbl", ref: "Jiang+15", refLink: "https://ui.adsabs.harvard.edu/abs/2015AJ....149..188J/abstract"},
    {catalog: "OzDES", name: "OzDES.fit", ref: "Tie+17", refLink: "https://ui.adsabs.harvard.edu/abs/2017AJ....153..107T/abstract"},
    {catalog: "PHILLI", name: "PHILLI.tbl", ref: "Phillips+00", refLink: "https://ui.adsabs.harvard.edu/abs/2000MNRAS.319L...7P/abstract"},
    {catalog: "PS1", name: "highzqso.fit, table9.fit", ref: "Banados+16", refLink: "https://ui.adsabs.harvard.edu/abs/2016ApJS..227...11B/abstract"},
    {catalog: "PS1MAZ", name: "PS1MAZ.tbl", ref: "Mazzucchelli+17", refLink: "https://ui.adsabs.harvard.edu/abs/2017ApJ...849...91M/abstract"},
    {catalog: "PSO", name: "PSO.tbl", ref: "Venemans+15", refLink: "https://ui.adsabs.harvard.edu/abs/2015ApJ...801L..11V/abstract"},
    {catalog: "QPQ10", name: "QPQ10.tbl", ref: "Findlay+18", refLink: "https://ui.adsabs.harvard.edu/abs/2018ApJS..236...44F/abstract"},
    {catalog: "REQ4", name: "tb2_REQ4.txt, tb3_REQ4.txt", ref: "Yang+19", refLink: "https://ui.adsabs.harvard.edu/abs/2019AJ....157..236Y/abstract"},
    {catalog: "RLQ", name: "RLQ_tb4.fit", ref: "Tuccillo+15", refLink: "https://ui.adsabs.harvard.edu/abs/2015MNRAS.449.2818T/abstract"},
    {catalog: "S82X", name: "S82X_catalog_with_photozs_unique_Xraysrcs_likely_cps_2021.fits", ref: "LaMassa+16", refLink: "https://ui.adsabs.harvard.edu/abs/2016ApJ...817..172L/abstract"},
    {catalog: "SDLENS", name: "SDLENS.tbl", ref: "Williams+18", refLink: "https://ui.adsabs.harvard.edu/abs/2018MNRAS.477L..70W/abstract"},
    {catalog: "SDSSHI", name: "SDSSHI.tbl", ref: "Jiang+16", refLink: "https://ui.adsabs.harvard.edu/abs/2016ApJ...833..222J/abstract"},
    {catalog: "SHELQS", name: "SHELQS.tbl, SHELQStbls.fits", ref: "Matsuoka+19", refLink: "https://ui.adsabs.harvard.edu/abs/2018ApJ...869..150M/abstract"},
    {catalog: "SIX", name: "SIX.fit", ref: "Bottacini+12", refLink: "https://ui.adsabs.harvard.edu/abs/2012ApJS..201...34B/abstract"},
    {catalog: "SPIDERS DR14", name: "VAC_spiders_2RXS_DR14.fits, VAC_spiders_XMMSL_DR14.fits, spiders_quasar_bhmass-DR14.fits", ref: "Coffey+19", refLink: "https://ui.adsabs.harvard.edu/abs/2019A%26A...625A.123C/abstract"},
    {catalog: "SPIN18", name: "SPIN18.tbl", ref: "Spiniello+18", refLink: "https://ui.adsabs.harvard.edu/abs/2018MNRAS.480.1163S/abstract"},
    {catalog: "SPIN19", name: "spin19_tbls.fits", ref: "Spiniello+19", refLink: "https://ui.adsabs.harvard.edu/abs/2019MNRAS.485.5086S/abstract"},
    {catalog: "SQLS", name: "SQLS_tb1.fit, SQLS_tb3.fit, SQLS_tb4.fit, SQLS_tb5.fit, SQLS_tb6.fit", ref: "Inada+12", refLink: "https://ui.adsabs.harvard.edu/abs/2012AJ....143..119I/abstract"},
    {catalog: "SQUAD", name: "DR1_quasars_master.csv", ref: "Murphy+19", refLink: "https://ui.adsabs.harvard.edu/abs/2019MNRAS.482.3458M/abstract"},
    {catalog: "SUV", name: "SUV.tbl, SUV_tbs.fits", ref: "Yang+17", refLink: "https://ui.adsabs.harvard.edu/abs/2017AJ....154..269Y/abstract"},
    {catalog: "SXDF", name: "SXDF.fits", ref: "Simpson+12", refLink: "https://ui.adsabs.harvard.edu/abs/2012MNRAS.421.3060S/abstract"},
    {catalog: "SXDS", name: "SXDS.tbl, SXDS_abc.fits", ref: "Akiyama+15", refLink: "https://ui.adsabs.harvard.edu/abs/2015PASJ...67...82A/abstract"},
    {catalog: "UFS", name: "UFS_tb1.fit, UFS_tb2.fit", ref: "Glikman+13", refLink: "https://ui.adsabs.harvard.edu/abs/2013ApJ...778..127G/abstract"},
    {catalog: "ULTRA", name: "ULTRA.tbl", ref: "Wu+15", refLink: "https://ui.adsabs.harvard.edu/abs/2015IAUGA..2251223W/abstract"},
    {catalog: "UVQS", name: "UVQS_tb4.fit", ref: "Monroe+16", refLink: "https://ui.adsabs.harvard.edu/abs/2016AJ....152...25M/abstract"},
    {catalog: "VAQL", name: "VAQL.tbl", ref: "Chehade+18", refLink: "https://ui.adsabs.harvard.edu/abs/2018MNRAS.478.1649C/abstract"},
    {catalog: "VDES2", name: "VDES2.fits", ref: "Reed+19", refLink: "https://ui.adsabs.harvard.edu/abs/2019MNRAS.487.1874R/abstract"},
    {catalog: "VIKING", name: "VIKING.tbl", ref: "Venemans+15", refLink: "https://ui.adsabs.harvard.edu/abs/2015MNRAS.453.2259V/abstract"},
    {catalog: "VIPERS", name: "VIPERS_W1_SPECTRO_PDR2.fits, VIPERS_W4_SPECTRO_PDR2.fits", ref: "Scodeggio+18", refLink: "https://ui.adsabs.harvard.edu/abs/2018A%26A...609A..84S/abstract"},
    {catalog: "VMC", name: "VMC.tbl", ref: "Ivanov+16", refLink: "https://ui.adsabs.harvard.edu/abs/2016A%26A...588A..93I/abstract"},
    {catalog: "WARSAW", name: "WARSAW.tbl", ref: "Kostrzewa-Rutkowska+18", refLink: "https://ui.adsabs.harvard.edu/abs/2018MNRAS.476..663K/abstract"},
    {catalog: "WGD", name: "WGD.fits", ref: "Agnello+18", refLink: "https://ui.adsabs.harvard.edu/abs/2018MNRAS.479.4345A/abstract"},
    {catalog: "WISEA", name: "WISEA.fit", ref: "Secrest+15", refLink: "https://ui.adsabs.harvard.edu/abs/2015ApJS..221...12S/abstract"},
    {catalog: "WISEHI", name: "WISEHI_highzqso.fit, WISEHI_tb1.fit", ref: "Wang+16", refLink: "https://ui.adsabs.harvard.edu/abs/2016ApJ...819...24W/abstract"},
    {catalog: "WOLF1", name: "WOLF1.fits", ref: "Wolf+18", refLink: "https://ui.adsabs.harvard.edu/abs/2018PASA...35...24W/abstract"},
    {catalog: "XLSS", name: "XLSS.fit", ref: "Stalin+10", refLink: "https://ui.adsabs.harvard.edu/abs/2010MNRAS.401..294S/abstract"},
    {catalog: "XMM-XXL", name: "XXL_tb2master.fit", ref: "Liu+16", refLink: "https://ui.adsabs.harvard.edu/abs/2016MNRAS.459.1602L/abstract"},
    {catalog: "XMMSMC", name: "XMMSMCtb4.fit", ref: "Maitra+19", refLink: "https://ui.adsabs.harvard.edu/abs/2016MNRAS.459.1602L/abstract"},
    {catalog: "XMSS", name: "XMSS.fit", ref: "Barcons+07", refLink: "https://ui.adsabs.harvard.edu/abs/2007A%26A...476.1191B/abstract"},
    {catalog: "XSERVS-WCDFS_ES1", name: "es1_xmm_cat.fits, wcdfs_xmm_cat.fits", ref: "Ni+21", refLink: "https://ui.adsabs.harvard.edu/abs/2021ApJS..256...21N/abstract"},
    {catalog: "XSERVS_XMMLSS", name: "XSERVS_XMMLSS.fits", ref: "Chen+18", refLink: "https://ui.adsabs.harvard.edu/abs/2018MNRAS.478.2132C/abstract"},
    {catalog: "XWAS", name: "XWAS.fit", ref: "Esquej+13", refLink: "https://ui.adsabs.harvard.edu/abs/2013A%26A...557A.123E/abstract"},
    {catalog: "YQLF", name: "YQLF.fit", ref: "Yang+18", refLink: "https://ui.adsabs.harvard.edu/abs/2018AJ....155..110Y/abstract"},
    {catalog: "eHAQ", name: "eHAQ.tbl, eHAQ_tb3.fits", ref: "Krogager+16", refLink: "https://ui.adsabs.harvard.edu/abs/2016MNRAS.455.2698K/abstract"},
    {catalog: "z6.51", name: "z6.51result.tbl", ref: "Fan+19", refLink: "https://ui.adsabs.harvard.edu/abs/2019ApJ...870L..11F/abstract"},
    {catalog: "COMP2CAT", name: "COMP2CAT.fit", ref: "Jimenez-Gallardo+19", refLink: "https://ui.adsabs.harvard.edu/abs/2019A%26A...627A.108J/abstract"},
    {catalog: "eFEDS", name: "eFEDS_AGNv17.6.fits, eROSITA_ctps.fit", ref: "eFEDS/eROSITA", refLink: "https://erosita.mpe.mpg.de/edr/eROSITAObservations/Catalogues/"},
]

// Column descriptions.

// Suffix:
const columnSuffixesData = [
    { name: "_merged", description: "Best single value for this source, computed by weighted averaging (photometry) or priority selection (redshift, morphology). This is the column you should use for science." },
    { name: "_all", description: "JSON array of ALL values from every matched catalog for this source, e.g. [1.234, 1.237, 1.240]. Preserves full provenance — useful for checking agreement across surveys." },
    { name: "_origin", description: "JSON array of integer catalog IDs (matching _all order), identifying which catalog contributed each value. Catalog ID mapping is in index2ds.pickle." },
    { name: "_sub_all", description: "JSON array of sub-classifications (morphology only), providing finer detail than the main class label." },
    { name: "e_", description: "Prefix indicating measurement uncertainty (error) on the quantity that follows. E.g., e_U_mag_merged is the error on U_mag_merged." }
];

// Identification & Coordinates.
const idAndCoords = [
    { name: "AGN-DB_name", description: "Unique AGN-DB source identifier" },
    { name: "RA", description: "Right Ascension (J2000) [degrees, 0–360]" },
    { name: "DEC", description: "Declination (J2000) [degrees, -90 to +90]" },
    { name: "origin", description: "Python-tuple-repr string of catalog IDs that contributed to this source after LYRA cross-matching, e.g. \"(21, 32, 81)\". Parse with ast.literal_eval()." },
    { name: "in_galactic_plane", description: "Boolean flag: True if the source lies within |b| < 10 degrees of the Galactic plane. Sources near the plane are more likely to suffer from stellar contamination, high extinction, and source confusion. Users building clean extragalactic samples should filter on in_galactic_plane == False."},
    { name: "galaxy_only_flag", description: "Boolean flag (stage 7.52): True when the source has at least one \"galaxy\" classification and NO AGN-type classification (type1, type2, generic_agn, blazar, lens_system, dual/merger) in any tier. These may be obscured/buried AGN where nuclear activity is undetected." },
    { name: "unknown_only_flag", description: "Boolean flag (stage 7.52): True when the source has classifications in at least one tier, but ALL values are \"unknown\". Distinguishes \"observed but unclassifiable\" from \"never observed\" (which would be NaN)." },
    // TODO: need to fix star_flag description.
    { name: "star_flag", description: "Categorical (stage 7.5). One of: 'confirmed' — spec_class contains 'star' and no non-star spec_class. Spectroscopic star call; treat as definitive. 'likely'    — no spec_class, all non-spec classifications (SED/xray/image/gen) say 'star', and no X-ray detection in any xf*_all column. Photometric star call with no rescue signal. Caveat: a null X-ray flux can also mean no X-ray coverage at that position, not just a non-detection. 'unlikely'  — non-spec classifications all say 'star' BUT at least one xf*_all is non-null. The X-ray detection overrides the photometric star call, suggesting a misclassified AGN. 'none'      — not flagged as a star (any non-star classification in any tier, no classification at all, or every classification is 'unknown'). No rows are removed by stage 7.5. Typical filters: df.star_flag == 'none'                  # strict df.star_flag != 'confirmed'             # permissive df.star_flag.isin(['none','unlikely'])  # matches                                 # legacy                                 # behaviour" },
    { name: "close_intra_dup_arcsec", description: "Float (stage 7.53): separation in arcseconds to the nearest *intra-catalog* neighbor within 1.0\", or NaN when none exists. Two merged sources are intra-catalog neighbors when at least one source-catalog contributed to both (set(origin_A) & set(origin_B) ≠ ∅). LYRA forbids merging two detections from the same catalog, so a small value here reflects a catalog-side data quality artifact, NOT a LYRA assignment failure. Typical filter for \"trust this source is well isolated\": df.close_intra_dup_arcsec.isna() | (df.close_intra_dup_arcsec > 0.1)."},
    { name: "close_intra_dup_partner", description: "Int64 nullable (stage 7.53): row index in this same table of the intra-catalog neighbor recorded in close_intra_dup_arcsec, or \"NA\". Use to inspect the counterpart directly:  df.iloc[partner_idx]." }
];

// Redshift.
// Types.
const redshiftTypes = [
    { name: "spec_Z_all", description: "Spectroscopic redshift — all values [JSON array]" },
    { name: "spec_Z_origin", description: "Catalog IDs for spec_Z values [JSON array]" },
    { name: "e_spec_Z_all", description: "Errors on spectroscopic redshifts [JSON array]" },
    { name: "phot_Z_all", description: "Photometric redshift — all values [JSON array]" },
    { name: "phot_Z_origin", description: "Catalog IDs for phot_Z values [JSON array]" },
    { name: "e_phot_Z_all", description: "Errors on photometric redshifts [JSON array]" },
    { name: "min_phot_Z_all", description: "Lower bound of photo-z confidence interval [JSON]" },
    { name: "max_phot_Z_all", description: "Upper bound of photo-z confidence interval [JSON]" },
    { name: "p_phot_Z_all", description: "Photo-z probability / PDF peak value [JSON array]" },
    { name: "Z_all", description: "Generic redshift (type unspecified) — all values" },
    { name: "Z_origin", description: "Catalog IDs for Z values [JSON array]" },
    { name: "e_Z_all", description: "Errors on generic redshifts [JSON array]" },
    { name: "q_Z_all", description: "Redshift quality flags [JSON array]" },
    { name: "q_Z_origin", description: "Catalog IDs for quality flags [JSON array]" }
];

// Best redshift.
const bestRedshift = [
    { name: "best_Z_all", description: "Best redshift, selected by priority: 1st = spectroscopic (most reliable), 2nd = photometric, 3rd = generic. Stored as JSON array (first element is the best)." },
    { name: "best_Z_merged", description: "Scalar best redshift value (first element of best_Z_all extracted as a plain float). This is the column you should use for science when you want a single numeric redshift per source." },
    { name: "best_Z_origin", description: "Catalog ID of the best redshift [JSON array]" },
    { name: "f_best_Z", description: "Flag indicating best redshift type [float]: 1.0 = spectroscopic, 2.0 = photometric, 3.0 = generic" }
];

// Classification / Morphology.
const classificationCols = [
    { name: "spec_class_all", description: "Spectroscopic classification — all values" },
    { name: "spec_class_origin", description: "Catalog IDs [JSON array]" },
    { name: "spec_class_sub_all", description: "Sub-classification detail (e.g. \"sy1.5\", \"bllac\")" },
    { name: "gen_class_all", description: "Generic classification — all values" },
    { name: "gen_class_origin", description: "Catalog IDs [JSON array] (Note: gen_class has no _sub_all column; the other four tiers do.)" },
    { name: "SED_class_all", description: "SED-fitting classification — all values" },
    { name: "SED_class_origin", description: "Catalog IDs [JSON array]" },
    { name: "SED_class_sub_all", description: "Sub-classification detail" },
    { name: "xray_class_all", description: "X-ray classification (point-like vs extended)" },
    { name: "xray_class_origin", description: "Catalog IDs [JSON array]" },
    { name: "xray_class_sub_all", description: "Sub-classification detail" },
    { name: "image_class_all", description: "Visual/image-based classification — all values" },
    { name: "image_class_origin", description: "Catalog IDs [JSON array]" },
    { name: "image_class_sub_all", description: "Sub-classification detail" },
    { name: "best_class_all", description: "Best classification, selected by priority: spec_class > SED_class > xray_class > image_class > gen_class" },
    { name: "best_class_origin", description: "Catalog ID of the best classification" },
    { name: "best_class_sub_all", description: "Sub-classification of the best class" }
];

// Photometry — UV/Optical/Near-IR Magnitudes.
const uvOpticalNIRPhotometry = [
    { name: "FUV_mag", wavelength: "1350–1750 Å", system_instrument: "GALEX Far Ultraviolet" },
    { name: "NUV_mag", wavelength: "1750–2800 Å", system_instrument: "GALEX Near Ultraviolet" },
    { name: "1450Mag", wavelength: "1450 Å", system_instrument: "Rest-frame UV absolute magnitude (high-z)" },
    { name: "1450mag", wavelength: "1450 Å", system_instrument: "Rest-frame UV apparent magnitude (high-z)" },
    { name: "U_mag", wavelength: "~3650 Å", system_instrument: "Johnson U" },
    { name: "B_mag", wavelength: "~4400 Å", system_instrument: "Johnson B" },
    { name: "V_mag", wavelength: "~5500 Å", system_instrument: "Johnson V" },
    { name: "R_mag", wavelength: "~7000 Å", system_instrument: "Johnson R (Cousins)" },
    { name: "I_mag", wavelength: "~9000 Å", system_instrument: "Johnson I (Cousins)" },
    { name: "u_mag", wavelength: "3551 Å", system_instrument: "SDSS u" },
    { name: "g_mag", wavelength: "4686 Å", system_instrument: "SDSS g" },
    { name: "r_mag", wavelength: "6165 Å", system_instrument: "SDSS r" },
    { name: "i_mag", wavelength: "7481 Å", system_instrument: "SDSS i" },
    { name: "z_mag", wavelength: "8931 Å", system_instrument: "SDSS z" },
    { name: "G_mag", wavelength: "~5000 Å", system_instrument: "Gaia G (white-light, broad)" },
    { name: "GBP_mag", wavelength: "3300–6800 Å", system_instrument: "Gaia Blue Photometer (BP)" },
    { name: "GRP_mag", wavelength: "6400–10500 Å", system_instrument: "Gaia Red Photometer (RP)" },
    { name: "Y_mag", wavelength: "1.05 µm", system_instrument: "Y band (VISTA/UKIDSS)" },
    { name: "J_mag", wavelength: "1.25 µm", system_instrument: "J band (2MASS/VISTA/UKIDSS)" },
    { name: "H_mag", wavelength: "1.65 µm", system_instrument: "H band (2MASS/VISTA/UKIDSS)" },
    { name: "K_mag", wavelength: "2.19 µm", system_instrument: "K band (2MASS/VISTA/UKIDSS)" },
    { name: "W1_mag", wavelength: "3.4 µm", system_instrument: "WISE band 1" },
    { name: "W2_mag", wavelength: "4.6 µm", system_instrument: "WISE band 2" },
    { name: "W3_mag", wavelength: "12 µm", system_instrument: "WISE band 3" },
    { name: "W4_mag", wavelength: "22 µm", system_instrument: "WISE band 4" }
];

// SDSS Extinctions.
const sdssExtinction = [
    { name: "u_extinction", description: "Galactic extinction in SDSS u [mag]" },
    { name: "g_extinction", description: "Galactic extinction in SDSS g [mag]" },
    { name: "r_extinction", description: "Galactic extinction in SDSS r [mag]" },
    { name: "i_extinction", description: "Galactic extinction in SDSS i [mag]" },
    { name: "z_extinction", description: "Galactic extinction in SDSS z [mag]" },
    { name: "E_B-V", description: "Color excess E(B-V) from dust maps [mag]" }
];

// Photometry — X-ray Fluxes.
const xrayFluxes = [
    { name: "xf1", energy_range: "0.1–2.4 keV", notes: "Soft X-ray (ROSAT band)" },
    { name: "xf2", energy_range: "0.2–12 keV", notes: "Broad band (XMM-Newton total)" },
    { name: "xf3", energy_range: "0.2–2 keV", notes: "Soft (XMM-Newton)" },
    { name: "xf4", energy_range: "0.5–10 keV", notes: "Broad band" },
    { name: "xf5", energy_range: "0.5–2 keV", notes: "Standard soft band" },
    { name: "xf6", energy_range: "0.5–4.5 keV", notes: "Soft+medium (XMM-Newton)" },
    { name: "xf7", energy_range: "0.5–7 keV", notes: "Very broad (XMM-Newton)" },
    { name: "xf8", energy_range: "14–195 keV", notes: "Hard X-ray / gamma (Swift BAT)" },
    { name: "xf9", energy_range: "2–10 keV", notes: "Standard hard band" },
    { name: "xf10", energy_range: "2–12 keV", notes: "Broad hard (XMM-Newton)" },
    { name: "xf11", energy_range: "2–7 keV", notes: "Hard (XMM-Newton)" },
    { name: "xf12", energy_range: "100 MeV – 100 GeV", notes: "Gamma-ray (Fermi LAT)" },
    { name: "xf13", energy_range: "4.5–7.5 keV", notes: "Medium-hard (XMM-Newton)" },
    { name: "xf14", energy_range: "0.2–0.5 keV", notes: "Very soft (eROSITA)" },
    { name: "xf15", energy_range: "0.5–1 keV", notes: "Soft (eROSITA)" },
    { name: "xf16", energy_range: "1–2 keV", notes: "Medium (eROSITA)" },
    { name: "xf17", energy_range: "2–4.5 keV", notes: "Hard (eROSITA)" },
    { name: "xf18", energy_range: "4.5–12 keV", notes: "Very hard (eROSITA)" },
    { name: "xf20", energy_range: "1.2–2.0 keV", notes: "Chandra CSC medium band" },
    { name: "xf21", energy_range: "0.5–1.2 keV", notes: "Chandra CSC soft band" },
    { name: "xf22", energy_range: "0.2–0.5 keV", notes: "Chandra CSC ultrasoft band" },
    { name: "xf23", energy_range: "~0.1–10.0 keV", notes: "Chandra CSC wide band" },
    { name: "xf24", energy_range: "18–55 keV", notes: "Hard X-ray (Swift BAT)" },
    { name: "xf25", energy_range: "2.3–5 keV", notes: "eROSITA" },
    { name: "xf27", energy_range: "0.2–2.3 keV", notes: "Soft (eROSITA)" },
    { name: "xf28", energy_range: "2–5 keV", notes: "Hard (eROSITA)" },
    { name: "xf29", energy_range: "5–8 keV", notes: "Very hard (eROSITA)" }
];

// Photometry — X-ray Flux Density.
const xrayFluxDensity = [
    { name: "xfd1", description: "Flux density at 2 keV (from SPIDERS/2RXS)" }
];

// Photometry — X-ray Count Rates.
const xrayCountRates = [
    { name: "xcr1", description: "0.1–2.4 keV count rate" }
];

// Photometry — X-ray Photon Counts.
const xrayPhotonCounts = [
    { name: "counts1", energy_range: "0.1–2.4 keV", mission_name: "ROSAT/2RXS" },
    { name: "counts2", energy_range: "0.2–12 keV", mission_name: "4XMM" },
    { name: "counts4", energy_range: "Full band", mission_name: "S82X" },
    { name: "counts5", energy_range: "0.5–2 keV", mission_name: "S82X, CDF-S" },
    { name: "counts7", energy_range: "Medium-hard band", mission_name: "CDF-S" },
    { name: "counts9", energy_range: "2–10 keV", mission_name: "XXL, S82X" },
    { name: "counts11", energy_range: "Hard band", mission_name: "CDF-S" },
    { name: "counts12", energy_range: "100 MeV – 100 GeV", mission_name: "Fermi 4FGL" },
    { name: "counts15", energy_range: "eROSITA band", mission_name: "eROSITA" },
    { name: "counts16", energy_range: "eROSITA band", mission_name: "eROSITA" },
    { name: "counts26", energy_range: "Total source counts", mission_name: "eFEDS" },
    { name: "counts27", energy_range: "ML counts band 1", mission_name: "eROSITA" },
    { name: "counts28", energy_range: "ML counts band 4", mission_name: "eROSITA" },
    { name: "counts29", energy_range: "ML counts band 5", mission_name: "eROSITA" }
];

// Photometry — X-ray Hardness Ratios.
const xrayHardnessRatios = [
    { name: "HR1", ratio_name: "Hardness ratio 1", instrument: "XMM-Newton (4XMM)" },
    { name: "HR2", ratio_name: "Hardness ratio 2", instrument: "XMM-Newton (4XMM)" },
    { name: "HR3", ratio_name: "Hardness ratio 3", instrument: "XMM-Newton (4XMM)" },
    { name: "HR4", ratio_name: "Hardness ratio 4", instrument: "XMM-Newton (4XMM)" },
    { name: "HR5", ratio_name: "Hard/Medium counts ratio (HRhm)", instrument: "Chandra (CSC 2.0)" },
    { name: "HR6", ratio_name: "Hard/Soft counts ratio (HRhs)", instrument: "Chandra (CSC 2.0)" },
    { name: "HR7", ratio_name: "Medium/Soft counts ratio (HRms)", instrument: "Chandra (CSC 2.0)" },
    { name: "HR8", ratio_name: "(2–4.5 keV) / (0.5–2 keV)", instrument: "Mixed" },
    { name: "HR9", ratio_name: "(2–7 keV) / (0.5–2 keV)", instrument: "Mixed" }
];

// Photometry — Infrared & Radio Fluxes.
const irAndRadioFluxes = [
    { name: "rf5", wavelength_frequency: "20 cm / 1.5 GHz", notes: "Radio L-band (FIRST/NVSS)" },
    { name: "rf6", wavelength_frequency: "21 cm / 1.4 GHz", notes: "Radio L-band (VLA standard)" },
    { name: "rf7", wavelength_frequency: "24 µm", notes: "Mid-IR (Spitzer MIPS)" },
    { name: "rf8", wavelength_frequency: "250 µm", notes: "Far-IR (Herschel SPIRE)" },
    { name: "rf10", wavelength_frequency: "3.6 µm", notes: "Near/mid-IR (Spitzer IRAC Ch1)" },
    { name: "rf11", wavelength_frequency: "350 µm", notes: "Sub-mm (Herschel SPIRE)" },
    { name: "rf12", wavelength_frequency: "4.5 µm", notes: "Near/mid-IR (Spitzer IRAC Ch2)" },
    { name: "rf14", wavelength_frequency: "500 µm", notes: "Sub-mm (Herschel SPIRE)" },
    { name: "rf15", wavelength_frequency: "8.0 µm", notes: "Mid-IR (Spitzer IRAC Ch4)" },
    { name: "rf16", wavelength_frequency: "5.8 µm", notes: "Mid-IR (Spitzer IRAC Ch3)" },
    { name: "rf18", wavelength_frequency: "20 GHz / 1.5 cm", notes: "Radio (AT20G)" },
    { name: "rf19", wavelength_frequency: "8 GHz / 3.7 cm", notes: "Radio (VLA)" },
    { name: "rf20", wavelength_frequency: "5 GHz / 6 cm", notes: "Radio C-band (VLA)" },
    { name: "rf21", wavelength_frequency: "0.15 GHz / 2 m", notes: "Low-frequency radio (LOFAR/GMRT)" }
];

const source_catalogs = [
    { directory: "2MRS", description: "All-sky optically selected AGN catalog. No redshift.", dataFiles: "2MRS_AGN.fit", reference: "Zaw+19", dateAdded: "pre-2026" },
    { directory: "2QZ", description: "2dF QSO Redshift Survey. Not only AGN. Spec-z.", dataFiles: "2QZ.fit", reference: "Croom+04", dateAdded: "pre-2026" },
    { directory: "2SLAQ", description: "2dF-SDSS LRG and QSO. Spec-z.", dataFiles: "2slaqqso.fit", reference: "Croom+04", dateAdded: "pre-2026" },
    { directory: "3FGL Fermi cleanups 2", description: "Fermi AGN, GTC optical follow-up. Generic-z.", dataFiles: "3FGL2.fits", reference: "Paiano+17+19", dateAdded: "pre-2026" },
    { directory: "3LAC", description: "Fermi LAT third AGN catalog. Generic-z.", dataFiles: "3LAC_highlat.fit, 3LAC_lowlat.fit, 3LAC_table7.fit", reference: "Ackermann+15", dateAdded: "pre-2026" },
    { directory: "4FGL3", description: "Blazars, multiband. Spec-z.", dataFiles: "4FGL3.fits", reference: "Pena-Herazo+22", dateAdded: "pre-2026" },
    { directory: "4FGL_DR4", description: "Fermi LAT 4th source catalog DR4, 14 yr. 7,195 gamma-ray sources. Multi-dim cols flattened. Implicit class: blazar.", dataFiles: "gll_psc_v35.fit", reference: "Ballet+23", dateAdded: "2026-03-24" },
    { directory: "4LAC", description: "Fermi AGN. Generic-z. All-sky.", dataFiles: "4LAC.fit", reference: "Ajello+22", dateAdded: "pre-2026" },
    { directory: "4XMM_DR10", description: "XMM source catalog DR10. Generic sources. No redshift. ~575k sources.", dataFiles: "4XMM_DR10cat_v1.0.fits", reference: "Webb+20", dateAdded: "pre-2026" },
    { directory: "6dFGS_AGN", description: "Broad-line AGN from 6dF Galaxy Survey, southern hemisphere. 15,265 sources. Spec-z.", dataFiles: "6dfgs_agn_table2.tsv", reference: "Chen+22", dateAdded: "2026-03-24" },
    { directory: "AGNELA", description: "Single lensed AGN. Spec-z.", dataFiles: "AGNELA.tbl", reference: "Agnello+18", dateAdded: "pre-2026" },
    { directory: "AllBRICQS", description: "Bright QSOs from GAIA. Spec-z.", dataFiles: "AllBRICQS.csv", reference: "Onken+23", dateAdded: "pre-2026" },
    { directory: "ALMA_decarli", description: "[CII] survey of 27 QSO at z>5.94. Spec-z.", dataFiles: "alma_decarli.fits", reference: "Decarli+18", dateAdded: "pre-2026" },
    { directory: "AT20G", description: "Radio QSO catalog. Spec-z.", dataFiles: "AT20G.fit", reference: "Mahony+11", dateAdded: "pre-2026" },
    { directory: "ATLAS", description: "1.4 GHz survey with optical spectroscopy. 60% AGN. Spec-z.", dataFiles: "ATLAS.fits", reference: "Mao+12", dateAdded: "pre-2026" },
    { directory: "BAHM", description: "Type 1 QSO from WISE, UKIDSS-LAS, ESO-VHS. Spec-z.", dataFiles: "BAHM_NED.fits", reference: "Banerji+15", dateAdded: "pre-2026" },
    { directory: "BASS", description: "Swift-BAT AGN with spectroscopic follow-ups. Spec-z and generic-z.", dataFiles: "BASS_agns.fit", reference: "Koss+17", dateAdded: "pre-2026" },
    { directory: "BASS_DR2", description: "BAT AGN Spectroscopic Survey DR2. 743 ultra-hard X-ray AGN. Spec-z. Converted from CDS to CSV.", dataFiles: "BASS_DR2_main.csv", reference: "Koss+22", dateAdded: "2026-03-24" },
    { directory: "BAT-105M", description: "Swift-BAT all-sky catalog. Not only AGN. Generic-z.", dataFiles: "BAT-105M.fits", reference: "Oh+18", dateAdded: "pre-2026" },
    { directory: "belladitta19", description: "High-z QSO from VLA Sky Survey. Spec-z.", dataFiles: "belladitta19.csv", reference: "Belladitta+19", dateAdded: "pre-2026" },
    { directory: "belladitta20", description: "High-z QSO from DES. Spec-z.", dataFiles: "belladitta20.csv", reference: "Belladitta+20", dateAdded: "pre-2026" },
    { directory: "BGGFC", description: "Faint AGN candidates in COSMOS field. Spec-z and photo-z.", dataFiles: "BGGFC_tb1.xlsx, BGGFC_tb2.xlsx", reference: "Boutsia+18", dateAdded: "pre-2026" },
    { directory: "C-COSM", description: "X-ray + ONIR counterpart, X-ray properties. Spec-z, photo-z, z-best. NH present.", dataFiles: "C-COSM_catalog.fit", reference: "Marchesi+16", dateAdded: "pre-2026" },
    { directory: "CatGlobe", description: "All-sky QSO candidates from Gaia DR3 + Pan-STARRS/SkyMapper + CatWISE. ~1.9M candidates. Photo-z. Implicit class: generic_agn.", dataFiles: "catglobe_qso_cand_aas.fits", reference: "Fu+24+25", dateAdded: "2026-03-24" },
    { directory: "CDFS7", description: "7 Ms CDFS catalog. Spec-z and photo-z.", dataFiles: "CDFS7.fit", reference: "Luo+17", dateAdded: "pre-2026" },
    { directory: "ChaMP", description: "Optical spectroscopic follow-up of Chandra sources. Not only AGN. Spec-z.", dataFiles: "ChaMP.tbl", reference: "Trichas+12", dateAdded: "pre-2026" },
    { directory: "COMP2CAT", description: "Radio AGN at z_spec<0.15.", dataFiles: "COMP2CAT.fit", reference: "Jimenez-Gallardo+19", dateAdded: "pre-2026" },
    { directory: "CSC2.0", description: "Chandra source catalog 2.0. No redshift. ~300k unique sources.", dataFiles: "csc2master.fits", reference: "Evans+19", dateAdded: "pre-2026" },
    { directory: "Dart", description: "SDSS and WISE red AGN. Spec-z.", dataFiles: "dart.fits", reference: "Hviding+18", dateAdded: "pre-2026" },
    { directory: "DEEP", description: "DEEP2 spectroscopic redshift survey at Keck. Not only AGN. Spec-z.", dataFiles: "zcat.deep2.dr4_agn.fits", reference: "Newman+12", dateAdded: "pre-2026" },
    { directory: "DESI_DR1", description: "DESI DR1 QSO catalog. 1,797,084 quasars (filtered QSO+ZCAT_PRIMARY from 30M spectra). Fluxes in nanomaggies (g/r/z/W1/W2). Implicit class: generic_agn.", dataFiles: "DESI_DR1_QSO.fits", reference: "DESI Collaboration (2025)", dateAdded: "2026-03-25" },
    { directory: "DR16Q", description: "SDSS quasar catalog DR16. Spec-z.", dataFiles: "DR16Q_Superset_v3.fits", reference: "Lyke+20", dateAdded: "pre-2026" },
    { directory: "DUHIZ", description: "High-z QSOs from multiple surveys. Spec-z.", dataFiles: "DUHIZ_tb2.fits, DUHIZ_tb3.fits", reference: "Wang+17", dateAdded: "pre-2026" },
    { directory: "DUz6", description: "Photometric and spectroscopic QSO at z>6. Spec-z.", dataFiles: "DUz6table3.fits, DUz6table6.fits", reference: "Wang+19", dateAdded: "pre-2026" },
    { directory: "eFEDS", description: "First eROSITA catalog with spectral analysis. Spec-z and photo-z. AGN only.", dataFiles: "eFEDS_AGNv17.6.fits", reference: "Liu+22", dateAdded: "pre-2026" },
    { directory: "eHAQ", description: "Damped Lya absorbers toward reddened quasars. Not only QSO. Spec-z and photo-z.", dataFiles: "eHAQ_tb3.fits, eHAQ.tbl", reference: "Krogager+16", dateAdded: "pre-2026" },
    { directory: "ELQS-N", description: "QSO survey (North), from 2MASS, WISE, SDSS. Photo-z and spec-z.", dataFiles: "ELQS-N.txt", reference: "Schindler+18", dateAdded: "pre-2026" },
    { directory: "ELQS-S", description: "QSO survey (South), from 2MASS, WISE, SDSS. Photo-z and spec-z.", dataFiles: "ELQS-S.txt", reference: "Schindler+19", dateAdded: "pre-2026" },
    { directory: "eRASS1_merged", description: "Consolidated eROSITA DR1 catalog: original eRASS1 source catalog combined with the eRASS1_ctpt AGN counterpart catalog (966,194 X-ray sources with LS10 counterparts; spec-z for 196K, photo-z for the rest). Replaces former separate eRASS1 + eRASS1_ctpt directories.", dataFiles: "eRASS1_ctp.fits", reference: "Merloni+24, Salvato+25", dateAdded: "pre-2026 / 2026-03-24" },
    { directory: "FISCBA", description: "Single lensed QSO by galaxy cluster. Generic-z.", dataFiles: "FISCBA.tbl", reference: "Fischer+98", dateAdded: "pre-2026" },
    { directory: "GaiaUnwise", description: "QSO from Gaia DR2 and unWISE match. Photo-z.", dataFiles: "Gaia_unWISE_AGNs.fits", reference: "Shu+19", dateAdded: "pre-2026" },
    { directory: "GL-DB", description: "Catalog of lensed QSOs and other objects. Spec-z.", dataFiles: "GLDB_tbl2.fits", reference: "Lemon+18", dateAdded: "pre-2026" },
    { directory: "GLIKMAN", description: "AGN in Stripe 82, optical and infrared. Spec-z.", dataFiles: "glikmanAGN.fits", reference: "Glikman+18", dateAdded: "pre-2026" },
    { directory: "HELLAS2XMM", description: "X-ray sources with R band identifications. Not only AGN. Spec-z.", dataFiles: "HELLAS2XMM.fit, HELLAS2XMMe.fit", reference: "Cocchia+07", dateAdded: "pre-2026" },
    { directory: "HETDEX_HDR4", description: "Untargeted IFU spectroscopic AGN from Hobby-Eberly Telescope. 15,940 AGN at z=0.1-4.6. Spec-z. Implicit class: generic_agn.", dataFiles: "hetdex_agn_hdr4.fits", reference: "Liu+25", dateAdded: "2026-03-24" },
    { directory: "HETDEX_LOFAR", description: "Cross-matched HETDEX spectroscopy with LOFAR radio sources. 28,705 sources. Spec-z. Implicit class: generic_agn.", dataFiles: "HETDEX_LOFAR_Spectroscopic_z_Catalog.fits", reference: "Davis+24", dateAdded: "2026-03-24" },
    { directory: "IANTEG", description: "Integral identified AGNs. Spec-z. IBIS instrument.", dataFiles: "IANTEG_AGN.vot", reference: "Masetti+13", dateAdded: "pre-2026" },
    { directory: "IBIS", description: "Integral AGN with optical identification. Spec-z.", dataFiles: "IBIS.fit", reference: "Malizia+12, Krivonos+12", dateAdded: "pre-2026" },
    { directory: "IKEDA", description: "QSO at z>4/5 from CFHT and UKIDSS. Spec-z.", dataFiles: "IKEDA.tbl", reference: "Ikeda+17", dateAdded: "pre-2026" },
    { directory: "J1030", description: "X-ray source catalog, multiband. Spec-z and photo-z.", dataFiles: "J1030.fit", reference: "Nanni+20, Marchesi+21", dateAdded: "pre-2026" },
    { directory: "LAMOST_DR10", description: "LAMOST DR10 LRS QSO catalog. 79,491 quasars (filtered from 11.4M spectra). PS1 g/r/i/z/y AB mags. Implicit class: generic_agn.", dataFiles: "LAMOST_DR10_QSO.fits", reference: "Jin+25", dateAdded: "2026-03-25" },
    { directory: "LoTSS_DR2", description: "LOFAR Two-Metre Sky Survey DR2 radio AGN. 573,974 AGN candidates. Multi-dim cols flattened. Implicit class: generic_agn.", dataFiles: "agn-v1.1.fits", reference: "Hardcastle+23/Best+25", dateAdded: "2026-03-24" },
    { directory: "LSSA", description: "Two quartile lensed systems from 2MASS. Spec-z.", dataFiles: "LSSA.tbl", reference: "Lucey+18", dateAdded: "pre-2026" },
    { directory: "MFJC", description: "High-z quasars from CFHTS. Spec-z.", dataFiles: "MFJC_Sample.fit, MFJC_table5.fit", reference: "McGreer+18", dateAdded: "pre-2026" },
    { directory: "MHH", description: "QSOs in SDSS Stripe 82. Spec-z.", dataFiles: "MHH.fit", reference: "Meusinger+11", dateAdded: "pre-2026" },
    { directory: "MZZ", description: "QSO from color-color diagram, spectroscopically confirmed. Spec-z.", dataFiles: "MZZ.tbl", reference: "Marano+88", dateAdded: "pre-2026" },
    { directory: "NBCKDE", description: "Photometric QSO selection in SDSS. Photo-z.", dataFiles: "NBCKDE.fit", reference: "Richards+09", dateAdded: "pre-2026" },
    { directory: "NBCKv3", description: "Photometric QSO classification from SDSS. Photo-z and spec-z.", dataFiles: "NBCKv3_cand.fit", reference: "Richards+15", dateAdded: "pre-2026" },
    { directory: "NLSy1_DR17", description: "Narrow-line Seyfert 1 from SDSS-DR17. 22,656 NLSy1 + 52,273 BLSy1. Spec-z. Implicit class: type1.", dataFiles: "seyfert-catalog-v1.fits", reference: "Rakshit+24", dateAdded: "2026-03-24" },
    { directory: "NuSTAR_NSS80", description: "NuSTAR 80-month serendipitous survey. 1,285 hard X-ray sources. Spec-z (547 classified). Converted from MRT.", dataFiles: "NSS80.fits", reference: "Greenwell+24", dateAdded: "2026-03-25" },
    { directory: "OVRLAP", description: "QSOs in SDSS, spectroscopic follow-up. Spec-z.", dataFiles: "OVRLAP.tbl", reference: "Jiang+15", dateAdded: "pre-2026" },
    { directory: "OzDES", description: "QSOs in DES survey. Spec-z.", dataFiles: "OzDES.fit", reference: "Tie+17", dateAdded: "pre-2026" },
    { directory: "PHILLI", description: "Lens system from VLA CLASS survey. Spec-z.", dataFiles: "PHILLI.tbl", reference: "Phillips+00", dateAdded: "pre-2026" },
    { directory: "PS1", description: "PanSTARRS QSOs with photometry. Photo-z.", dataFiles: "highzqso.fit, table9.fit", reference: "Banados+16", dateAdded: "pre-2026" },
    { directory: "PS1MAZ", description: "15 QSO at z>6 from PanSTARRS. Spec-z.", dataFiles: "PS1MAZ.tbl", reference: "Mazzucchelli+17", dateAdded: "pre-2026" },
    { directory: "PSO", description: "3 QSO at z>6 from PanSTARRS. Spec-z.", dataFiles: "PSO.tbl", reference: "Venemans+15", dateAdded: "pre-2026" },
    { directory: "Quaia", description: "All-sky QSO from Gaia DR3 + unWISE. 1,295,502 quasars. Spectrophotometric redshifts. Implicit class: generic_agn.", dataFiles: "quaia_G20.5.fits", reference: "Storey-Fisher+24", dateAdded: "2026-03-24" },
    { directory: "QUBNIR", description: "BAL QSOs. Spec-z.", dataFiles: "QUBNIR.csv", reference: "Cupani+22", dateAdded: "pre-2026" },
    { directory: "QUBRF", description: "QUBRICS survey, spectroscopic and ML classification.", dataFiles: "QUBRF.csv", reference: "Guarneri+22", dateAdded: "pre-2026" },
    { directory: "REDt", description: "Spectroscopic follow-up of red QSO. Spec-z. All-sky.", dataFiles: "REDt.csv", reference: "Temple+19", dateAdded: "pre-2026" },
    { directory: "RLQ", description: "87 QSO from FIRST and SDSS. Spec-z.", dataFiles: "RLQ_tb4.fit", reference: "Tuccillo+15", dateAdded: "pre-2026" },
    { directory: "S82X", description: "X-ray catalog with counterparts in Stripe 82. Spec-z and photo-z.", dataFiles: "S82X_catalog_with_photozs_unique_Xraysrcs_likely_cps_2021.fits", reference: "LaMassa+16", dateAdded: "pre-2026" },
    { directory: "SDLENS", description: "Three quasar lenses from SDSS. Spec-z.", dataFiles: "SDLENS.tbl", reference: "Williams+18", dateAdded: "pre-2026" },
    { directory: "SDSS_DR19Q", description: "SDSS-V DR19 Black Hole Mapper quasar properties. 82,363 quasars with BH masses, luminosities. Spec-z. Multi-dim emission line cols dropped. Implicit class: generic_agn.", dataFiles: "SDSS_DR19Q.fits", reference: "Almeida+25", dateAdded: "2026-03-25" },
    { directory: "SDSSHI", description: "SDSS QSO at z>5 spectroscopically confirmed. Spec-z.", dataFiles: "SDSSHI.tbl", reference: "Jiang+16", dateAdded: "pre-2026" },
    { directory: "SHELLQs", description: "High-z quasars from HSC-SSP. 447 objects (182 quasars at z=5.66-7.07). Spec-z. Parsed from fixed-width. Implicit class: generic_agn.", dataFiles: "shellqs.fits", reference: "Matsuoka+22+25", dateAdded: "2026-03-25" },
    { directory: "SIX", description: "Swift and Integral catalog. Spec-z.", dataFiles: "SIX.fit", reference: "Bottaccini+12", dateAdded: "pre-2026" },
    { directory: "SPIDERS DR14", description: "eBOSS spectroscopic follow-up of ROSAT and XMM sources. Spec-z. Not only AGN.", dataFiles: "spiders_quasar_bhmass-DR14.fits, VAC_spiders_2RXS_DR14.fits, VAC_spiders_XMMSL_DR14.fits", reference: "Coffey+19", dateAdded: "pre-2026" },
    { directory: "SPIN19", description: "Two lenses from DES survey. Spec-z.", dataFiles: "spin19_tbls.fits", reference: "Spiniello+19", dateAdded: "pre-2026" },
    { directory: "SQLS", description: "SDSS quasar lenses. Not only AGN. Spec-z.", dataFiles: "SQLS_tb4.fit, SQLS_tb6.fit", reference: "Inada+12", dateAdded: "pre-2026" },
    { directory: "Stripe82X_DR3", description: "Stripe 82X Data Release 3. 6,181 X-ray sources. Multi-band photometry. Spec-z. From VizieR.", dataFiles: "S82X_DR3.fits", reference: "LaMassa+24", dateAdded: "2026-03-25" },
    { directory: "Stripe82XL", description: "Stripe 82-XL expanded X-ray catalog. 22,737 X-ray sources, 54.8 deg2. Spec-z (partial). From VizieR.", dataFiles: "S82XL.fits", reference: "Peca+24", dateAdded: "2026-03-25" },
    { directory: "SUV", description: "QSO from SDSS via photometry, spectrally confirmed. Spec-z.", dataFiles: "SUV.tbl, SUV_tbs.fits", reference: "Yang+17", dateAdded: "pre-2026" },
    { directory: "Swift_BAT_157", description: "Swift-BAT 157-month all-sky hard X-ray catalog. 1,888 sources. Spec-z.", dataFiles: "BAT_157m_catalog_20250525.txt", reference: "Lien+25", dateAdded: "2026-03-24" },
    { directory: "SXDF", description: "Radio imaging of Subaru/XMM-Newton Deep Field. Spec-z and photo-z.", dataFiles: "SXDF.fits", reference: "Simpson+12", dateAdded: "pre-2026" },
    { directory: "SXDS", description: "Subaru multiband catalog with XMM matching. Spec-z and photo-z. Not only AGN.", dataFiles: "SXDS_abc.fits, SXDS.tbl", reference: "Akiyama+15", dateAdded: "pre-2026" },
    { directory: "UFS", description: "FIRST and UKIDSS reddened QSO. Not only AGN.", dataFiles: "UFS_tb1.fit, UFS_tb2.fit", reference: "Glikman+13", dateAdded: "pre-2026" },
    { directory: "ULTRA", description: "z=6.3 QSO from SDSS. Spec-z.", dataFiles: "ULTRA.tbl", reference: "Wu+15", dateAdded: "pre-2026" },
    { directory: "VAQL", description: "Lensed QSOs from ATLAS VLT and WISE. Spec-z.", dataFiles: "VAQL.tbl", reference: "Schechter+17", dateAdded: "pre-2026" },
    { directory: "VDES2", description: "Three high-z QSO from VISTA, WISE, DES. Spec-z.", dataFiles: "VDES2.fits", reference: "Reed+19", dateAdded: "pre-2026" },
    { directory: "VIKING", description: "High-z QSO from VISTA and KiDS. Spec-z.", dataFiles: "VIKING.tbl", reference: "Venemans+15", dateAdded: "pre-2026" },
    { directory: "VIPERS", description: "Galaxies and AGN, spectroscopic. Spec-z. W1 field only.", dataFiles: "VIPERS_W1_SPECTRO_PDR2.fits", reference: "Scodeggio+18", dateAdded: "pre-2026" },
    { directory: "VMC", description: "QSO behind Magellanic clouds. Spec-z.", dataFiles: "VMC.tbl", reference: "Ivanov+16", dateAdded: "pre-2026" },
    { directory: "WARSAW", description: "Lensed QSO. Spec-z.", dataFiles: "WARSAW.tbl", reference: "Kostrzewa-Rutkowska+18", dateAdded: "pre-2026" },
    { directory: "WISEA", description: "Photometric AGN from AllWISE. Spec-z and photo-z.", dataFiles: "WISEA.fit", reference: "Secrest+15", dateAdded: "pre-2026" },
    { directory: "WOLF1", description: "Luminous QSO at high-z. Spec-z.", dataFiles: "WOLF1.fits", reference: "Wolf+18", dateAdded: "pre-2026" },
    { directory: "XLSS", description: "Spectroscopic follow-up of XMM and CFHTLS sources. Not only AGN. Spec-z.", dataFiles: "XLSS.fit", reference: "Stalin+10", dateAdded: "pre-2026" },
    { directory: "XMMSMC", description: "XMM AGN behind Small Magellanic Cloud. No redshift.", dataFiles: "XMMSMCtb4.fit", reference: "Maitra+19", dateAdded: "pre-2026" },
    { directory: "XMM-XXL", description: "XMM-XXL sources with spectroscopic confirmation. Spec-z.", dataFiles: "XXL_tb2master.fit", reference: "Liu+16", dateAdded: "pre-2026" },
    { directory: "XMSS", description: "XMM serendipitous survey. Not only AGN. Spec-z.", dataFiles: "XMSS.fit", reference: "Barcons+07", dateAdded: "pre-2026" },
    { directory: "XWAS", description: "Large X-ray survey with XMM. Spec-z. Not only AGN.", dataFiles: "XWAS.fit", reference: "Esquej+13", dateAdded: "pre-2026" },
    { directory: "YQLF", description: "Photometric QSO from CFHT, VLT, SDSS. Spec-z.", dataFiles: "YQLF.fit", reference: "Yang+18", dateAdded: "pre-2026" },
    { directory: "YSZ", description: "Type 2 QSO from BOSS. Spec-z.", dataFiles: "Type2s.fits", reference: "Yuan+16", dateAdded: "pre-2026" },
    { directory: "z6.51", description: "Lensed QSO from PanSTARRS and WISE. Spec-z.", dataFiles: "z6.51result.tbl", reference: "Fan+19", dateAdded: "pre-2026" }
];

const further_info = [
    // Optical Imaging
    { name: "SDSS", category: "Optical Imaging", resolution: "~1.5''", pos_err: "0.2''", notes: "14,600 deg². AB mags." },
    { name: "Pan-STARRS", category: "Optical Imaging", resolution: "~1.5''", pos_err: "0.13''", notes: "30,000 deg². AB mags." },
    { name: "DES", category: "Optical Imaging", resolution: "~1''", pos_err: "0.15''", notes: "5,186 deg²." },
    { name: "KiDS", category: "Optical Imaging", resolution: "~1''", pos_err: "0.2''", notes: "1,350 deg²." },
    { name: "SkyMapper", category: "Optical Imaging", resolution: "2-3''", pos_err: "0.1-0.2''", notes: "Southern-sky Gaia-tied optical survey (used by CatGlobe/CatSouth)." },
    { name: "CFHTLS", category: "Optical Imaging", resolution: "1.4''", pos_err: "0.1''", notes: "-" },
    { name: "Subaru HSC", category: "Optical Imaging", resolution: "<0.8''", pos_err: "0.02''", notes: "AB mags." },
    { name: "HST", category: "Optical Imaging", resolution: "0.05''", pos_err: "0.1''", notes: "-" },

    // Astrometric
    { name: "Gaia", category: "Astrometric", resolution: "0.4''", pos_err: "2mas internal", notes: "All-sky astrometric baseline." },

    // IR Imaging
    { name: "2MASS", category: "IR Imaging", resolution: "2''", pos_err: "0.5''", notes: "Vega mags." },
    { name: "WISE", category: "IR Imaging", resolution: "6/6/6/12'' (W1-W4)", pos_err: "0.4''", notes: "Vega mags." },
    { name: "CatWISE / unWISE", category: "IR Imaging", resolution: "-", pos_err: "0.25-0.4''", notes: "WISE reprocessings with Gaia-tied astrometry. Used by Quaia, CatGlobe, GaiaUnwise." },
    { name: "UKIDSS", category: "IR Imaging", resolution: "1.3''", pos_err: "0.1''", notes: "-" },
    { name: "VISTA VHS", category: "IR Imaging", resolution: "0.5''", pos_err: "0.3''", notes: "-" },
    { name: "VISTA VIKING", category: "IR Imaging", resolution: "0.7''", pos_err: "0.1''", notes: "-" },
    { name: "Spitzer IRAC", category: "IR Imaging", resolution: "2''", pos_err: "0.5''", notes: "-" },
    { name: "Spitzer MIPS", category: "IR Imaging", resolution: "6/18/40'' (24/70/160um)", pos_err: "1.4''", notes: "-" },

    // UV
    { name: "GALEX", category: "UV", resolution: "6''", pos_err: "1.5''", notes: "AB mags." },

    // X-ray
    { name: "XMM", category: "X-ray", resolution: "12.5''", pos_err: "RADEC_ERR column", notes: "Dynamic error per source." },
    { name: "Chandra", category: "X-ray", resolution: "0.5'' (on-axis)", pos_err: "(r0+r1)/2", notes: "Off-axis dependent precision." },
    { name: "Swift-XRT", category: "X-ray", resolution: "18''", pos_err: "2''", notes: "-" },
    { name: "Swift-BAT", category: "X-ray", resolution: "19.5'", pos_err: "up to ~10'", notes: "Average error is ~5'." },
    { name: "NuSTAR", category: "X-ray", resolution: "58'' (HPD)", pos_err: "~8''", notes: "-" },
    { name: "eROSITA", category: "X-ray", resolution: "16.1''", pos_err: "5''", notes: "-" },

    // Gamma-ray
    { name: "INTEGRAL-IBIS", category: "Gamma-ray", resolution: "12'", pos_err: "up to 5-10'", notes: "-" },
    { name: "Fermi-LAT", category: "Gamma-ray", resolution: "~0.8deg at 1 GeV", pos_err: "3-10'", notes: "95% error ellipses typically 3-10'." },

    // Radio
    { name: "VLA FIRST", category: "Radio", resolution: "5''", pos_err: "0.5''", notes: "-" },
    { name: "NRAO VLA (NVSS)", category: "Radio", resolution: "45''", pos_err: "7''", notes: "-" },
    { name: "LOFAR (LoTSS)", category: "Radio", resolution: "~6''", pos_err: "0.2-0.4''", notes: "Applies to S/N > 7." },

    // Spectroscopic
    { name: "SDSS BOSS/eBOSS", category: "Spectroscopic", resolution: "2'' / 3'' fiber", pos_err: "0.2''", notes: "Positions tied directly to SDSS imaging." },
    { name: "SDSS-V BHM (DR19Q)", category: "Spectroscopic", resolution: "2'' fiber", pos_err: "0.1-0.2''", notes: "Positions tied directly to SDSS imaging." },
    { name: "DESI (Mayall 4m)", category: "Spectroscopic", resolution: "1.5'' fiber", pos_err: "0.1-0.2''", notes: "Positions from Legacy Surveys DR9 (Gaia-tied)." },
    { name: "LAMOST", category: "Spectroscopic", resolution: "3.3'' fiber", pos_err: "0.5''", notes: "-" },
    { name: "6dF (UK Schmidt)", category: "Spectroscopic", resolution: "6.7'' fiber", pos_err: "~1''", notes: "-" },
    { name: "2dF (AAT)", category: "Spectroscopic", resolution: "2.1'' fiber", pos_err: "~0.3''", notes: "-" },
    { name: "Keck/DEIMOS (DEEP2)", category: "Spectroscopic", resolution: "-", pos_err: "0.2-0.3''", notes: "Positions inherited from CFHT BRI or SDSS imaging." },
    { name: "HETDEX (HET/VIRUS)", category: "Spectroscopic", resolution: "1.5'' IFU fiber", pos_err: "0.2-0.4''", notes: "-" }
];

function Information() {
    const MakeColNameDescription = ({ table = [] }) => {
        return table.map((item, index) => {
            return (
                <tr key={index} className="odd:bg-white even:bg-gray-100 font-light">
                    <td className='p-2'><strong>{ item.name }</strong></td>
                    <td className='p-2'>{ item.description }</td>
                </tr>
            );
        });
    }

    const makeSourceCatalogsTable = () => {
        return source_catalogs.map((item, index) => {
            return (
                <tr key={index} className="odd:bg-white even:bg-gray-100 font-light">
                    <td className='p-2'><strong>{item.directory}</strong></td>
                    <td className='p-2'>{item.description}</td>
                    <td className='p-2 font-mono text-xs'>{item.dataFiles}</td>
                    <td className='p-2'>{item.reference}</td>
                    <td className='p-2'>{item.dateAdded}</td>
                </tr>
            );
        });
    };

    const make_further_info_block = () => {
        return further_info.map((item, index) => {
            return (
                <tr key={index} className="odd:bg-white even:bg-gray-100 font-light">
                    <td className='p-2'><strong>{item.name}</strong></td>
                    <td>{item.category}</td>
                    <td>{item.resolution}</td>
                    <td>{item.pos_err}</td>
                    <td>{item.notes}</td>
                </tr>
            );
        });
    };

    return (
        <div className="px-[10%]">
            <Tabs>
                <TabList>
                    <Tab>Source Catalog Table References</Tab>
                    <Tab>Column Description</Tab>
                    <Tab>Pipeline & Survey Info</Tab>
                </TabList>

                <TabPanel>
                    <table className='mb-20 w-full'>
                        <thead>
                        <tr className='bg-orange-600 text-left text-white'>
                            <th width="15%" className='p-2'>Directory</th>
                            <th width="45%" className='p-2'>Description</th>
                            <th width="20%" className='p-2'>Data File(s)</th>
                            <th width="10%" className='p-2'>Reference</th>
                            <th width="10%" className='p-2'>Date Added</th>
                        </tr>
                        </thead>
                        <tbody>
                        {makeSourceCatalogsTable()}
                        </tbody>
                    </table>
                </TabPanel>

                <TabPanel>
                    <div className="mb-6 p-4 bg-gray-50 rounded border border-gray-200 text-base font-light text-gray-700">
                        <h4 className="font-semibold text-gray-900 mb-2">Missing Data</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><code>NaN</code> (Not a Number) indicates no measurement is available.</li>
                            <li>Inside an <code>e_*_all</code> error-provenance array, the bare JSON token `<code>null</code>`
                                appears in slots where the contributing catalog reported the value
                                but no error for it (e.g., <code>e_W1_mag_all = [null, null, null, 2.718]</code>).
                                Index alignment with the matching *_all and *_origin arrays is
                                preserved. Parse with <code>json.loads()</code>.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                            Suffix Explanation
                        </h1>
                    </div>

                    <table className='mb-20 w-full'>
                        <thead>
                            <tr className='bg-orange-600 text-left text-white'>
                                <th width="20%" className='p-2'>Column Name Suffix</th>
                                <th width="80%">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <MakeColNameDescription table={columnSuffixesData} />
                        </tbody>
                    </table>

                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                            Identification & Coordinates
                        </h1>
                    </div>

                    <table className='mb-20 w-full'>
                        <thead>
                            <tr className='bg-orange-600 text-left text-white'>
                                <th width="20%" className='p-2'>Column Name</th>
                                <th width="80%">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <MakeColNameDescription table={idAndCoords} />
                        </tbody>
                    </table>

                    <div>
                        <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-4">
                            Redshift
                        </h1>
                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                            Redshift Types
                        </h2>
                    </div>

                    <table className='mb-20 w-full'>
                        <thead>
                        <tr className='bg-orange-600 text-left text-white'>
                            <th width="50%" className='p-2'>Column Name</th>
                            <th width="50%">Description</th>
                        </tr>
                        </thead>
                        <tbody>
                            <MakeColNameDescription table={redshiftTypes} />
                        </tbody>
                    </table>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                            Best redshift values
                        </h2>
                    </div>
                    <table className='mb-20 w-full'>
                        <thead>
                        <tr className='bg-orange-600 text-left text-white'>
                            <th width="20%" className='p-2'>Column Name</th>
                            <th width="80%">Description</th>
                        </tr>
                        </thead>
                        <tbody>
                            <MakeColNameDescription table={bestRedshift} />
                        </tbody>
                    </table>

                    <div>
                        <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-4">
                            Classification / Morphology
                        </h1>
                    </div>

                    <div className="mb-6 p-4 bg-gray-50 rounded border border-gray-200 text-base font-light text-gray-700">
                        <h4 className="font-semibold text-gray-900 mb-2">Label scheme</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><code>type1</code>: Broad-line AGN (Seyfert 1, QSO Type 1, BLAGN)</li>
                            <li><code>type2</code>: Narrow-line AGN (Seyfert 2, NLAGN, Sy1.5–1.9)</li>
                            <li><code>generic_agn</code>: AGN without type specification (QSO, LINER, Seyfert)</li>
                            <li><code>blazar</code>: Blazars (BL Lac, FSRQ)</li>
                            <li><code>galaxy</code>: Non-AGN galaxies (elliptical, spiral, starburst, etc.)</li>
                            <li><code>star</code>: Stars, white dwarfs, CVs, X-ray binaries</li>
                            <li><code>lens_system</code>: Gravitational lens systems</li>
                            <li><code>unknown</code>: Unclassifiable or insufficient data</li>
                        </ul>
                    </div>

                    <table className='mb-20 w-full'>
                        <thead>
                        <tr className='bg-orange-600 text-left text-white'>
                            <th width="30%" className='p-2'>Column Name</th>
                            <th width="70%">Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        <MakeColNameDescription table={classificationCols} />
                        </tbody>
                    </table>

                    <div>
                        <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-4">
                            Photometry — UV/Optical/Near-IR Magnitudes
                        </h1>
                    </div>
                    <div className="mb-6 p-4 bg-gray-50 rounded border border-gray-200 text-base font-light text-gray-700">
                        <p>All magnitudes are in the AB system (after unit conversion). Each band has 5 columns: <code>{"{band}_merged"}</code>, <code>{"e_{band}_merged"}</code>, <code>{"{band}_all"}</code>, <code>{"e_{band}_all"}</code>, and <code>{"{band}_origin"}</code>.</p>
                    </div>
                    <table className='mb-20 w-full'>
                        <thead>
                        <tr className='bg-orange-600 text-left text-white'>
                            <th width="30%" className='p-2'>Band</th>
                            <th width="30%">Wavelength</th>
                            <th width="40%">System / Instrument</th>
                        </tr>
                        </thead>
                        <tbody>
                        {uvOpticalNIRPhotometry.map((item, index) => (
                            <tr key={index} className="odd:bg-white even:bg-gray-100 font-light">
                                <td className='p-2'><strong>{ item.name }</strong></td>
                                <td className='p-2'>{ item.wavelength }</td>
                                <td className='p-2'>{ item.system_instrument }</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                            SDSS Extinction Columns (Galactic foreground)
                        </h2>
                    </div>
                    <div className="mb-6 p-4 bg-gray-50 rounded border border-gray-200 text-base font-light text-gray-700">
                        <p>Each extinction column also has <code>_merged</code>, <code>_all</code>, <code>_origin</code>, <code>e_*_merged</code>, and <code>e_*_all</code> variants.</p>
                    </div>
                    <table className='mb-20 w-full'>
                        <thead>
                        <tr className='bg-orange-600 text-left text-white'>
                            <th width="40%" className='p-2'>Column Name</th>
                            <th width="60%">Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        <MakeColNameDescription table={sdssExtinction} />
                        </tbody>
                    </table>

                    <div>
                        <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-4">
                            Photometry — X-ray Fluxes [erg/s/cm²]
                        </h1>
                    </div>
                    <div className="mb-6 p-4 bg-gray-50 rounded border border-gray-200 text-base font-light text-gray-700">
                        <p>All X-ray fluxes are stored as log10(flux) in the merged columns. Each band has 5 columns: <code>{"{band}_merged"}</code>, <code>{"e_{band}_merged"}</code>, <code>{"{band}_all"}</code>, <code>{"e_{band}_all"}</code>, and <code>{"{band}_origin"}</code>.</p>
                        <p className="mt-2 font-semibold text-gray-900">Note:</p>
                        <p><code>xf19</code> (Fermi 1–100 GeV) and <code>xf26</code> (eROSITA 0.2–5 keV) are defined but may not appear in the final table if no data were merged.</p>
                    </div>
                    <table className='mb-20 w-full'>
                        <thead>
                        <tr className='bg-orange-600 text-left text-white'>
                            <th width="30%" className='p-2'>Band</th>
                            <th width="30%">Energy Range</th>
                            <th width="40%">Notes</th>
                        </tr>
                        </thead>
                        <tbody>
                        {xrayFluxes.map((item, index) => (
                            <tr key={index} className="odd:bg-white even:bg-gray-100 font-light">
                                <td className='p-2'><strong>{ item.name }</strong></td>
                                <td className='p-2'>{ item.energy_range }</td>
                                <td className='p-2'>{ item.notes }</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    <div>
                        <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-4">
                            Photometry — X-ray Flux Density [erg/cm²/s/Hz]
                        </h1>
                    </div>
                    <table className='mb-20 w-full'>
                        <thead>
                        <tr className='bg-orange-600 text-left text-white'>
                            <th width="20%" className='p-2'>Band</th>
                            <th width="80%">Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        <MakeColNameDescription table={xrayFluxDensity} />
                        </tbody>
                    </table>

                    <div>
                        <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-4">
                            Photometry — X-ray Count Rates [counts/s]
                        </h1>
                    </div>
                    <table className='mb-20 w-full'>
                        <thead>
                        <tr className='bg-orange-600 text-left text-white'>
                            <th width="20%" className='p-2'>Band</th>
                            <th width="80%">Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        <MakeColNameDescription table={xrayCountRates} />
                        </tbody>
                    </table>

                    <div>
                        <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-4">
                            Photometry — X-ray Photon Counts [counts]
                        </h1>
                    </div>
                    <div className="mb-6 p-4 bg-gray-50 rounded border border-gray-200 text-base font-light text-gray-700">
                        <p>Band energy ranges follow the same numbering structure as X-ray fluxes (xf).</p>
                    </div>
                    <table className='mb-20 w-full'>
                        <thead>
                        <tr className='bg-orange-600 text-left text-white'>
                            <th width="30%" className='p-2'>Name</th>
                            <th width="30%">Energy Range</th>
                            <th width="40%">Mission / Catalog Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {xrayPhotonCounts.map((item, index) => (
                            <tr key={index} className="odd:bg-white even:bg-gray-100 font-light">
                                <td className='p-2'><strong>{ item.name }</strong></td>
                                <td className='p-2'>{ item.energy_range }</td>
                                <td className='p-2'>{ item.mission_name }</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    <div>
                        <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-4">
                            Photometry — X-ray Hardness Ratios [dimensionless]
                        </h1>
                    </div>
                    <div className="mb-6 p-4 bg-gray-50 rounded border border-gray-200 text-base font-light text-gray-700 space-y-2">
                        <p>Hardness ratios quantify the spectral shape: higher values indicate harder (more energetic) X-ray spectra.</p>
                        <p>Defined as <code>(H-S)/(H+S)</code> where <code>H</code> and <code>S</code> are counts in hard and soft bands respectively.</p>
                    </div>
                    <table className='mb-20 w-full'>
                        <thead>
                        <tr className='bg-orange-600 text-left text-white'>
                            <th width="30%" className='p-2'>Name</th>
                            <th width="30%">Ratio Name</th>
                            <th width="40%">Instrument / Catalog</th>
                        </tr>
                        </thead>
                        <tbody>
                        {xrayHardnessRatios.map((item, index) => (
                            <tr key={index} className="odd:bg-white even:bg-gray-100 font-light">
                                <td className='p-2'><strong>{ item.name }</strong></td>
                                <td className='p-2'>{ item.ratio_name }</td>
                                <td className='p-2'>{ item.instrument }</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    <div>
                        <h1 className="text-5xl font-bold text-gray-900 mt-8 mb-4">
                            Photometry — Infrared & Radio Fluxes [mJy]
                        </h1>
                    </div>
                    <div className="mb-6 p-4 bg-gray-50 rounded border border-gray-200 text-base font-light text-gray-700">
                        <p>Each band has 5 columns: <code>{"{band}_merged"}</code>, <code>{"e_{band}_merged"}</code>, <code>{"{band}_all"}</code>, <code>{"e_{band}_all"}</code>, and <code>{"{band}_origin"}</code>.</p>
                        <p className="mt-2 font-semibold text-gray-900">Note:</p>
                        <p><code>rf1–rf4</code>, <code>rf9</code>, <code>rf13</code>, and <code>rf17</code> are defined in the schema but may not appear in the final table if no data were merged for those bands.</p>
                    </div>
                    <table className='mb-20 w-full'>
                        <thead>
                        <tr className='bg-orange-600 text-left text-white'>
                            <th width="20%" className='p-2'>Name</th>
                            <th width="30%">Wavelength / Frequency</th>
                            <th width="50%">Notes / Instrument</th>
                        </tr>
                        </thead>
                        <tbody>
                        {irAndRadioFluxes.map((item, index) => (
                            <tr key={index} className="odd:bg-white even:bg-gray-100 font-light">
                                <td className='p-2'><strong>{ item.name }</strong></td>
                                <td className='p-2'>{ item.wavelength_frequency }</td>
                                <td className='p-2'>{ item.notes }</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
                            General Pipeline Notes
                        </h1>
                    </div>
                    <div className="mb-20 p-4 bg-gray-50 rounded border border-gray-200 text-base font-light text-gray-700 space-y-3">
                        <p><strong>1. Cross-matching:</strong> Performed using LYRA v2.1, a Bayesian likelihood-ratio method that accounts for positional uncertainty, source density, and photometric priors.</p>
                        <p><strong>2. Photometric values (_merged):</strong> Computed as inverse-variance weighted averages when multiple catalogs contribute. Magnitudes are averaged in flux space, then converted back.</p>
                        <p><strong>3. X-ray flux columns (xf*_merged):</strong> Store log10(flux) values, not linear fluxes. For example, xf5_merged = -14.0 means flux = 10^(-14) erg/s/cm².</p>
                        <p><strong>4. Radio/IR flux columns (rf*_merged):</strong> Store linear flux values in mJy. Use log10() for visualization.</p>
                        <p><strong>5. The _all columns:</strong> Contain JSON arrays and should be parsed with <code>json.loads()</code> in Python.</p>
                        <p><strong>6. Star Filtering:</strong> Sources classified as "star" in morphology are FLAGGED (not removed) in stage 7.5 (filter_stars). Every row carries a star_flag value.</p>
                        <p><strong>7. Sentinel values:</strong> From original catalogs (-99, -999, -1, 0.0, 100.0 for redshifts; -99, -999, "unknown" for morphology) have been replaced with NaN during pipeline processing.</p>
                        <p><strong>8. Galactic plane filtering:</strong> Sources within |b| &lt; 10 degrees of the Galactic plane are flagged via <code>in_galactic_plane</code> (stage 7.55) and can be excluded for clean extragalactic analysis using <code>df[~df.in_galactic_plane]</code>.</p>
                    </div>
                </TabPanel>

                <TabPanel>
                    {/* Pipeline Metadata Summary block */}
                    <div className="mb-6 p-4 bg-gray-50 rounded border border-gray-200 text-base font-light text-gray-700">
                        <h4 className="font-semibold text-gray-900 mb-2">Pipeline & Catalog Notes</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>104 catalog directories</strong> (<code>eRASS1</code> + <code>eRASS1_ctpt</code> have been consolidated into a single <code>eRASS1_merged</code> directory).</li>
                            <li>Pipeline discovers catalogs dynamically via <code>src/index_datasets.py</code> (Stage 1), excluding <code>_to_remove</code>, <code>_no_class</code>, and <code>json_backups</code> directories.</li>
                            <li>Each directory contains an <code>angular_resolution.json</code> file used by the pipeline for matching.</li>
                            <li>Stage 1 produces <strong>118 d{"{N}"}.csv files</strong> from these 104 directories (max d-index = 117 in the latest <code>index2ds.pickle</code>).</li>
                            <li><strong>18 catalogs added in 2026</strong> (11 on 2026-03-24, 7 on 2026-03-25), 86 pre-2026 originals.</li>
                        </ul>
                        <p className="mt-3 italic text-xs text-gray-500">
                            * Note: Values represent each survey's internal astrometric precision as reported by the catalog authors. Cross-catalog matching uses these values as-is. Positions for spectroscopic facilities are inherited from target imaging reference catalogs unless otherwise noted.
                        </p>
                    </div>

                    {/* Formatted tabular content layout */}
                    <table className='mb-20 w-full'>
                        <thead>
                        <tr className='bg-orange-600 text-left text-white'>
                            <th width="20%" className='p-2'>Instrument / Survey</th>
                            <th width="15%">Category</th>
                            <th width="20%">PSF / Resolution</th>
                            <th width="15%">Position Error (pos_err)</th>
                            <th width="30%">Coverage / Notes</th>
                        </tr>
                        </thead>
                        <tbody>
                        {make_further_info_block()}
                        </tbody>
                    </table>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default Information;