create user root with encrypted password '1234';
grant all privileges on database skincare to skincare;
grant all privileges on database skincare to root;

\connect skincare

CREATE TABLE ingredient (
    ingr_id         INTEGER PRIMARY KEY, 
    friendly_name   VARCHAR,
    ingr_name       VARCHAR, 
    ingr_desc       VARCHAR
);

CREATE TABLE effect (
    effect_id       INTEGER PRIMARY KEY,
    effect_name     VARCHAR,
    effect_desc     VARCHAR
);

CREATE TABLE ingredient_ingredient (
    ingr1_id INTEGER REFERENCES ingredient(ingr_id) ON DELETE CASCADE,
    ingr2_id INTEGER REFERENCES ingredient(ingr_id) ON DELETE CASCADE,
    compatibility_points INTEGER,
    rel_desc VARCHAR,
    PRIMARY KEY (ingr1_id, ingr2_id),
    CHECK (ingr1_id > ingr2_id)
);

CREATE TABLE skin (
    skin_id	     INTEGER PRIMARY KEY,
    skin_name	 VARCHAR,
    skin_desc	 VARCHAR
);

CREATE TABLE brand (
    brand_id	 INTEGER PRIMARY KEY,
    brand_name	 VARCHAR,
    country	     VARCHAR
);

CREATE TABLE product (
    product_id	    INTEGER PRIMARY KEY,
    product_name	VARCHAR,
    product_type	VARCHAR,
    brand_id        INTEGER REFERENCES brand(brand_id) ON DELETE CASCADE
);

CREATE TABLE product_ingredient 
(
    product_ingr_id	    INTEGER PRIMARY KEY,
    product_id	        VARCHAR,
    ingr_id	            VARCHAR
);

CREATE TABLE ingredient_effect
(
    ingr_eff_id	    INTEGER PRIMARY KEY,
    ingr_id	        INTEGER REFERENCES ingredient(ingr_id) ON DELETE CASCADE,
    effect_id	    INTEGER REFERENCES effect(effect_id) ON DELETE CASCADE,
    descr	        VARCHAR
);

CREATE TABLE skin_ingredient 
(
    skin_ingr_id            INTEGER PRIMARY KEY,
    skin_id                 INTEGER REFERENCES skin(skin_id) ON DELETE CASCADE,
    ingr_id	                INTEGER REFERENCES ingredient(ingr_id) ON DELETE CASCADE,
    compatibility_points	INTEGER,
    rel_desc	            VARCHAR
);

grant all privileges on table ingredient, effect, product, brand, skin, ingredient_ingredient to skincare;

INSERT INTO brand (BRAND_ID,BRAND_NAME,COUNTRY) VALUES ('1', 'NEUTROGENA', 'US');
INSERT INTO brand (BRAND_ID,BRAND_NAME,COUNTRY) VALUES ('2', 'LOREAL', 'FR');
INSERT INTO brand (BRAND_ID,BRAND_NAME,COUNTRY) VALUES ('3', 'GARNIER', 'FR');
INSERT INTO brand (BRAND_ID,BRAND_NAME,COUNTRY) VALUES ('4', 'ACF', 'AR');
INSERT INTO brand (BRAND_ID,BRAND_NAME,COUNTRY) VALUES ('5', 'ST IVES_UNILEVER', 'US');
INSERT INTO brand (BRAND_ID,BRAND_NAME,COUNTRY) VALUES ('6', 'DERMAGLOS_ANDROMACO', 'AR');
INSERT INTO brand (BRAND_ID,BRAND_NAME,COUNTRY) VALUES ('7', 'NIVEA', 'DE');
INSERT INTO brand (BRAND_ID,BRAND_NAME,COUNTRY) VALUES ('8', 'CETAPHIL', 'US');
INSERT INTO brand (BRAND_ID,BRAND_NAME,COUNTRY) VALUES ('9', 'LA ROCHE POSAY_LOREAL', 'FR');
INSERT INTO brand (BRAND_ID,BRAND_NAME,COUNTRY) VALUES ('10', 'CLINIQUE', 'US');
INSERT INTO brand (BRAND_ID,BRAND_NAME,COUNTRY) VALUES ('11', 'AVON', 'AR');
INSERT INTO brand (BRAND_ID,BRAND_NAME,COUNTRY) VALUES ('12', 'NATURA', 'BR');
INSERT INTO brand (BRAND_ID,BRAND_NAME,COUNTRY) VALUES ('13', 'VICHY', 'US');
INSERT INTO brand (BRAND_ID,BRAND_NAME,COUNTRY) VALUES ('14', 'THE CHEMIST LOOK', 'US');
INSERT INTO brand (BRAND_ID,BRAND_NAME,COUNTRY) VALUES ('15', 'TODOMODA Beauty', 'AR');

INSERT INTO product (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,BRAND_ID) VALUES ('1', 'Serum Vitamina C', 'Serum', '11');
INSERT INTO product (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,BRAND_ID) VALUES ('2', 'Serum Ácido Hialurónico', 'Serum', '11');
INSERT INTO product (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,BRAND_ID) VALUES ('3', 'Protector Solar 50 FPS Ultra Mate', 'Sunscreen', '11');
INSERT INTO product (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,BRAND_ID) VALUES ('4', 'UV Face Soothing Sensitive Cream Spf50+', 'Sunscreen', '7');
INSERT INTO product (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,BRAND_ID) VALUES ('5', 'Cápsulas Vitamina C', 'Cápsulas', '11');
INSERT INTO product (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,BRAND_ID) VALUES ('6', 'Chronos 60+ Dia', 'Crema Día', '12');
INSERT INTO product (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,BRAND_ID) VALUES ('7', 'Chronos 60+ Noite', 'Crema Noche', '12');
INSERT INTO product (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,BRAND_ID) VALUES ('8', 'Chronos Exfoliante Antiseñales', 'Exfoliante', '12');
INSERT INTO product (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,BRAND_ID) VALUES ('9', 'Chronos Creme De Dia Para Rosto Pele Seca A Normal', 'Humectante', '12');
INSERT INTO product (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,BRAND_ID) VALUES ('10', 'Chronos Firmeza Y Radiancia +45', 'Antiage', '12');
INSERT INTO product (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,BRAND_ID) VALUES ('11', 'Effaclear limpiador facial', 'Limpiador', '9');
INSERT INTO product (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,BRAND_ID) VALUES ('12', 'Tratamiento Antiimperfecciones Vichy', 'Anti imperfecciones', '13');
INSERT INTO product (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,BRAND_ID) VALUES ('13', 'Tónico Neutrogena Acne Proofing', 'Tónico', '1');
INSERT INTO product (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,BRAND_ID) VALUES ('14', 'RadianceBoost Hydrogel Face Mask', 'Máscara Antiacné', '1');
INSERT INTO product (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,BRAND_ID) VALUES ('15', 'Reparador Anti-señales', 'Antiage', '1');
INSERT INTO product (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,BRAND_ID) VALUES ('16', 'Fine Fairness Brightening Serum', 'Serum', '1');
INSERT INTO product (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,BRAND_ID) VALUES ('17', 'Sun Fresh Derm Care FPS70', 'Sunscreen', '1');
INSERT INTO product (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,BRAND_ID) VALUES ('18', 'Contorno Ojos Rápida Acción Múltiple', 'Contorno Ojos', '1');
INSERT INTO product (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,BRAND_ID) VALUES ('19', 'Sérum facial con pha', 'Serum/Exfoliante', '15');
INSERT INTO product (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,BRAND_ID) VALUES ('20', 'Sérum facial con niacinamida', 'Serum/Exfoliante', '15');
INSERT INTO product (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,BRAND_ID) VALUES ('21', 'TÓNICO EXFOLIANTE MA', 'Serum', '14');
INSERT INTO product (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,BRAND_ID) VALUES ('22', 'BOOSTER VIT-C/FERÚLICO', 'Serum', '14');

INSERT INTO ingredient (INGR_ID,FRIENDLY_NAME,INGR_NAME,INGR_DESC) VALUES ('1', 'Vitamin A', 'Retinol', 'Retinol, also called vitamin A1, is a fat-soluble vitamin in the vitamin A family[1] found in food and used as a dietary supplement.');
INSERT INTO ingredient (INGR_ID,FRIENDLY_NAME,INGR_NAME,INGR_DESC) VALUES ('201', 'AHA', 'Lactic Acid', 'Lactic acid is milder than glycolic acid and also helps hydrate the skin. Because its molecules are larger than glycolic acid, it doesn’t penetrate the skin as deeply. This makes it a smart option for sensitive skin types who might find glycolic acid irritating.');
INSERT INTO ingredient (INGR_ID,FRIENDLY_NAME,INGR_NAME,INGR_DESC) VALUES ('202', 'AHA', 'Malic Acid', 'Malic acid is known for its skin-brightening abilities. With a molecule size larger than that of lactic acid, it’s also gentler on the skin.');
INSERT INTO ingredient (INGR_ID,FRIENDLY_NAME,INGR_NAME,INGR_DESC) VALUES ('203', 'AHA', 'Mandelic Acid', 'Mandelic acid is similar to lactic and malic acids in that its larger particle size makes it potentially less irritating. Unlike any of the other AHAs mentioned here, it has antibacterial properties.');
INSERT INTO ingredient (INGR_ID,FRIENDLY_NAME,INGR_NAME,INGR_DESC) VALUES ('204', 'AHA', 'Citric Acid', 'Citric acid is the mildest, least acidic of the AHAs mentioned here. It’s also an antioxidant, meaning it protects skin against aging and environmental damage.');
INSERT INTO ingredient (INGR_ID,FRIENDLY_NAME,INGR_NAME,INGR_DESC) VALUES ('205', 'AHA', 'Glycolic Acid', 'Glycolic acid is considered the strongest AHA commonly used in skin care. Because of the small size of its molecules, it penetrates the skin deeply and quickly.');
INSERT INTO ingredient (INGR_ID,FRIENDLY_NAME,INGR_NAME,INGR_DESC) VALUES ('4', 'PHA', 'Polyhydroxyalkanoates', 'PHAs are a type of hydroxy (or fruit) acid. Other hydroxy acids include alpha hydroxy acids (AHAs) and beta hydroxy acids (BHAs). All three are added to skin care products to help reverse sun damage, reduce the appearance of wrinkles, and make skin more elastic, toned, and hydrated.');
INSERT INTO ingredient (INGR_ID,FRIENDLY_NAME,INGR_NAME,INGR_DESC) VALUES ('5', 'Vitamin C', 'Absorbic Acid', 'Vitamin C is a powerful antioxidant that works to stimulate collagen production in your skin. It also fights fine lines, brightens your complexion, and provides a host of other benefits. Skincare experts also tout it as one of the best anti-aging ingredients you could ever use.');
INSERT INTO ingredient (INGR_ID,FRIENDLY_NAME,INGR_NAME,INGR_DESC) VALUES ('6', 'Benzagel', 'Benzoyl peroxide', 'Benzagel (benzoyl peroxide gel) is a topical (for the skin) antibacterial agent that also has a mild drying effect used to treat acne.');
INSERT INTO ingredient (INGR_ID,FRIENDLY_NAME,INGR_NAME,INGR_DESC) VALUES ('7', 'Niacinamide', 'Niacinamide', 'Niacinamide helps build cells in the skin while also protecting them from environmental stresses, such as sunlight, pollution, and toxins. Treats acne. Niacinamide may be helpful for severe acne, especially inflammatory forms like papules and pustules. Over time, you may see fewer lesions and improved skin texture.');
INSERT INTO ingredient (INGR_ID,FRIENDLY_NAME,INGR_NAME,INGR_DESC) VALUES ('9', 'Salicylic Acid', 'Salicylic Acid', 'Salicylic Acid is a beta hydroxy acid that occurs as a natural compound in plants. It has direct activity as an anti-inflammatory agent and acts as a topical antibacterial agent due to its ability to promote exfoliation.');
INSERT INTO ingredient (INGR_ID,FRIENDLY_NAME,INGR_NAME,INGR_DESC) VALUES ('10', 'Hyaluronic Acid', 'Hyaluronic Acid', 'Hyaluronic acid supplements can help increase skin moisture and reduce the appearance of fine lines and wrinkles. Topical treatments can soothe redness and dermatitis, while injections can make skin appear firmer.');
INSERT INTO ingredient (INGR_ID,FRIENDLY_NAME,INGR_NAME,INGR_DESC) VALUES ('11', 'RA', 'Retinoic Acid', 'Retinol stimulates fibroblasts to synthesize collagen fibres (stimulates the activity of fibroblasts and increases their number), improves skin elasticity (removes degenerated elastin fibers) and promotes angiogenesis [13]');
INSERT INTO ingredient (INGR_ID,FRIENDLY_NAME,INGR_NAME,INGR_DESC) VALUES ('12', 'Ensulizole', 'Ensulizole', 'Also known as phenylbenzimidazole sulfonic acid, ensulizole is a water soluble sunscreen ingredient that works in the UVB range, offering no UVA protection.');
INSERT INTO ingredient (INGR_ID,FRIENDLY_NAME,INGR_NAME,INGR_DESC) VALUES ('13', 'Octocrylene', 'Octocrylene', 'Octocrylene is a globally approved sunscreen agent that primarily protects skin from the UVB range of sunlight while providing a small amount of UVA protection. It also helps stabilize the UVA sunscreen ingredient avobenzone. Therefore, the two are often found in the same sunscreen formulas.');
INSERT INTO ingredient (INGR_ID,FRIENDLY_NAME,INGR_NAME,INGR_DESC) VALUES ('14', 'Avobenzone', 'Avobenzone', 'Avobenzone is an oil-soluble ingredient used in sunscreen products to absorb the full spectrum of UVA rays');
INSERT INTO ingredient (INGR_ID,FRIENDLY_NAME,INGR_NAME,INGR_DESC) VALUES ('15', 'Homosalate', 'Homosalate', 'Salicylates prevent direct skin exposure to the suns harmful rays by absorbing ultraviolet (UV) light. Homosalate specifically absorbs short-wave UVB rays, which are associated with DNA damage and increased risk of skin cancer.');
INSERT INTO ingredient (INGR_ID,FRIENDLY_NAME,INGR_NAME,INGR_DESC) VALUES ('16', 'Oxybenzone', 'Oxybenzone', 'While the primary function of oxybenzone is to absorb UV light, research has shown that it is also absorbed by the skin and stays in our bodies for an unknown amount of time. Oxybenzone is also used in nail polish, fragrances, hair spray, and cosmetics as a photostabilizer.');
INSERT INTO ingredient (INGR_ID,FRIENDLY_NAME,INGR_NAME,INGR_DESC) VALUES ('17', 'Ferulic Acid', 'Ferulic Acid', 'Ferulic acid is an antioxidant that works to boost the effects of other antioxidants. When used in skin care products, it helps to protect overall skin integrity by reducing the development of fine lines, spots, and wrinkles.');
INSERT INTO ingredient (INGR_ID,FRIENDLY_NAME,INGR_NAME,INGR_DESC) VALUES ('18', 'Vitamin E', 'Vitamin E', 'Vitamin E is a fat-soluble vitamin that acts as an antioxidant, helping protect cells from damage throughout your body. Its found in our sebum (skin oil), which creates a natural barrier to keep moisture in your skin.');
INSERT INTO ingredient (INGR_ID,FRIENDLY_NAME,INGR_NAME,INGR_DESC) VALUES ('19', 'Hydroquinone', 'Hydroquinone', 'Hydroquinone is used to lighten the dark patches of skin  (also called hyperpigmentation, melasma, liver spots, age spots, freckles) caused by pregnancy, birth control pills, hormone medicine, or injury to the skin. This medicine works by blocking the process in the skin that leads to discoloration. ');
INSERT INTO ingredient (INGR_ID,FRIENDLY_NAME,INGR_NAME,INGR_DESC) VALUES ('20', 'Glycerin', 'Glycerin', 'Glycerin is great for the skin because it acts as a humectant, which is a substance that allows the skin to retain moisture.  It can increase skin hydration, relieve dryness, and refresh the skins  surface. Its also an emollient, which means it can soften skin.');

INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('201', '1', '-5', 'Experts generally advise not using the two ingredients (any AHAs + Retinol) at the exact same time, since this can lead to dryness and irritation.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('202', '1', '-5', 'Experts generally advise not using the two ingredients (any AHAs + Retinol) at the exact same time, since this can lead to dryness and irritation.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('203', '1', '-5', 'Experts generally advise not using the two ingredients (any AHAs + Retinol) at the exact same time, since this can lead to dryness and irritation.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('204', '1', '-5', 'Experts generally advise not using the two ingredients (any AHAs + Retinol) at the exact same time, since this can lead to dryness and irritation.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('205', '1', '-5', 'Experts generally advise not using the two ingredients (any AHAs + Retinol) at the exact same time, since this can lead to dryness and irritation.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('10', '1', '5', 'Can hyaluronic acid and retinol be used together? Unlike many other skin care ingredients out there, hyaluronic acid and retinol can be used in the same skincare routine. Not only that, but using them together can help to lessen the severity of the side effects that often come with retinol usage.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('9', '1', '-2', 'Salicylic acid and Retinol used together in the same skin routine would cause dryness if they are applied oftenly.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('5', '1', '-2', 'Vitamin C and Retinol used together in the same skin routine would case dryness. Use it in different routines, vitamin C through the day and Retinol at the night. ');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('6', '1', '-4', 'It is useless to use benzoyl peroxide, which is usually used to treat acne, and retinol together.The ingredients can cancel the positive effects of each other out and leave skin extremely dry and irritated.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('4', '1', '-3', 'Retinol if mixed with PHAs can result in unpredictable irritation.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('9', '4', '-4', 'If you mix Vitamin C with PHAs and they are not formulated properly, they may negate the efficacy of both');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('6', '4', '-5', 'You should avoid using Vit. C with benzoyl peroxide, which can oxidize the Vit. C and, therefore, make it less potent. You can still use your benzoyl peroxide products, just not in the same part of your routine as the Vit.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('202', '201', '-5', 'Experts generally advice not using the two ingredients (any AHAs + AHAs) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('203', '201', '-5', 'Experts generally advice not using the two ingredients (any AHAs + AHAs) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('204', '201', '-5', 'Experts generally advice not using the two ingredients (any AHAs + AHAs) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('205', '201', '-5', 'Experts generally advice not using the two ingredients (any AHAs + AHAs) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('203', '202', '-5', 'Experts generally advice not using the two ingredients (any AHAs + AHAs) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('204', '202', '-5', 'Experts generally advice not using the two ingredients (any AHAs + AHAs) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('205', '202', '-5', 'Experts generally advice not using the two ingredients (any AHAs + AHAs) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('204', '203', '-5', 'Experts generally advice not using the two ingredients (any AHAs + AHAs) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('205', '203', '-5', 'Experts generally advice not using the two ingredients (any AHAs + AHAs) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('205', '9', '-5', 'Experts generally advice not using the two ingredients (any AHAs + BHAs) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('201', '5', '-5', 'Experts generally advice not using the two ingredients (any AHAs + Vitamin C) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('202', '5', '-5', 'Experts generally advice not using the two ingredients (any AHAs + Vitamin C) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('203', '5', '-5', 'Experts generally advice not using the two ingredients (any AHAs + Vitamin C) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('204', '5', '-5', 'Experts generally advice not using the two ingredients (any AHAs + Vitamin C) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('205', '5', '-5', 'Experts generally advice not using the two ingredients (any AHAs + Vitamin C) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('201', '9', '-5', 'Experts generally advice not using the two ingredients (any AHAs + BHAs (salicilyc acid)) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('202', '9', '-5', 'Experts generally advice not using the two ingredients (any AHAs + BHAs (salicilyc acid)) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('203', '9', '-5', 'Experts generally advice not using the two ingredients (any AHAs + BHAs (salicilyc acid)) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('204', '9', '-5', 'Experts generally advice not using the two ingredients (any AHAs + BHAs (salicilyc acid)) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('205', '204', '5', 'Together, these two AHAs smooth fine lines, improve skin discoloration and protect against future damage by eliminating free radicals.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('201', '10', '5', 'AHA  can be mixed with moisturizing ingredients like hyaluronic acid to get effective result, just ensure you are not using AHA during the day.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('202', '10', '5', 'AHA  can be mixed with moisturizing ingredients like hyaluronic acid to get effective result, just ensure you are not using AHA during the day.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('203', '10', '5', 'AHA  can be mixed with moisturizing ingredients like hyaluronic acid to get effective result, just ensure you are not using AHA during the day.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('204', '10', '5', 'AHA  can be mixed with moisturizing ingredients like hyaluronic acid to get effective result, just ensure you are not using AHA during the day.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('205', '10', '5', 'AHA  can be mixed with moisturizing ingredients like hyaluronic acid to get effective result, just ensure you are not using AHA during the day.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('10', '9', '5', 'BHA can be mixed with moisturizing ingredients like hyaluronic acid to get effective results, just ensure you are not using BHAs during the day');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('10', '6', '5', 'Benzoyl peroxide can be mixed with moisturizing ingredients like hyaluronic acid to get effective results, just ensure you are not using BHAs during the day');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('10', '5', '3', 'Hyaluronic acid helps keep skin moisturized, while vitamin C protects from sun damage and can help fade skin discoloration. Both ingredients can help reduce the signs of aging in skin — especially when theyre used together.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('10', '7', '0', 'Hyaluronic acid and niacinamide are water-based treatments that complement each others hydrating effects and can be used together.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('20', '1', '5', 'One ingredient that can help prevent irritation when using a retinol-containing product is glycerin, a powerful humectant that helps draw water to the skin.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('20', '10', '0', 'Both humectants are compatible and commonly used together.');


INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('1', '1', '5');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('2', '2', '10');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('3', '3', '13');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('4', '3', '15');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('5', '3', '16');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('6', '4', '15');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('7', '4', '16');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('8', '5', '5');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('9', '6', '15');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('10', '7', '201');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('11', '7', '18');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('12', '8', '205');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('13', '9', '18');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('14', '10', '18');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('15', '19', '4');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('16', '20', '7');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('17', '22', '17');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('18', '11', '9');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('19', '11', '20');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('20', '13', '9');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('21', '13', '20');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('22', '12', '9');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('23', '12', '20');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('24', '12', '10');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('25', '14', '7');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('26', '15', '7');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('27', '16', '7');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('28', '16', '1');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('29', '16', '20');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('30', '17', '1');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('31', '17', '15');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('32', '17', '13');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('33', '18', '4');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('34', '18', '20');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('35', '21', '201');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('36', '22', '1');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('37', '22', '18');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('38', '22', '17');
INSERT INTO product_ingredient (PRODUCT_INGR_ID,PRODUCT_ID,INGR_ID) VALUES ('39', '22', '5');

INSERT INTO effect (EFFECT_ID,EFFECT_NAME,EFFECT_DESC) VALUES ('1', 'Exfoliant', 'Exfoliating is the process of removing dead skin cells from the surface of your skin using a chemical, granular substance, or exfoliation tool. ');
INSERT INTO effect (EFFECT_ID,EFFECT_NAME,EFFECT_DESC) VALUES ('2', 'Hydrating', 'Hydration is the absorption of moisture from the air and then infusing your cells with water to improve your skins ability to absorb moisture and nutrients. Moisturizing is about trapping and locking in the moisture to build your skins natural protective barrier.');
INSERT INTO effect (EFFECT_ID,EFFECT_NAME,EFFECT_DESC) VALUES ('3', 'Mosturizer', 'Moisturizing everyday can reduce the chance of developing extreme dryness or oiliness. Both extremes are harmful for skin and cause common skin conditions like acne. Conceals Other Skin Blemishes. Using a daily moisturizer ensures that the skins blemishes are camouflaged.');
INSERT INTO effect (EFFECT_ID,EFFECT_NAME,EFFECT_DESC) VALUES ('4', 'Cleanser', 'Facial cleansers play an important role in your skincare routine. Face washes are designed to remove impurities, germs, dirt and makeup that can irritate the skin.');
INSERT INTO effect (EFFECT_ID,EFFECT_NAME,EFFECT_DESC) VALUES ('5', 'Sunscreen', 'Sunscreens are essential for protecting your skin from UV damage');
INSERT INTO effect (EFFECT_ID,EFFECT_NAME,EFFECT_DESC) VALUES ('6', 'Peeling', 'Peeling remove the outer layer of the skin, which means they tend to go deeper to remove more excess dead skin cells than exfoliators. ');
INSERT INTO effect (EFFECT_ID,EFFECT_NAME,EFFECT_DESC) VALUES ('7', 'Toner', 'Toner can be used after a cleanser twice a day to remove excess traces of makeup or other residue from the skin.');
INSERT INTO effect (EFFECT_ID,EFFECT_NAME,EFFECT_DESC) VALUES ('8', 'Acne', 'Treatments work to clear away bacteria and dry up the excess oils that lead to acne.');



INSERT INTO ingredient_effect (ingr_eff_id,ingr_id,effect_id,descr) VALUES ('1', '1', '3', 'Retinol is used to mousture skin');
INSERT INTO ingredient_effect (ingr_eff_id,ingr_id,effect_id,descr) VALUES ('2', '1', '8', 'Retinol is also used for acne');
INSERT INTO ingredient_effect (ingr_eff_id,ingr_id,effect_id,descr) VALUES ('3', '201', '1', 'AHAs are acid and exfoliants');
INSERT INTO ingredient_effect (ingr_eff_id,ingr_id,effect_id,descr) VALUES ('4', '202', '1', 'AHAs are acid and exfoliants');
INSERT INTO ingredient_effect (ingr_eff_id,ingr_id,effect_id,descr) VALUES ('5', '203', '1', 'AHAs are acid and exfoliants');
INSERT INTO ingredient_effect (ingr_eff_id,ingr_id,effect_id,descr) VALUES ('6', '204', '1', 'AHAs are acid and exfoliants');
INSERT INTO ingredient_effect (ingr_eff_id,ingr_id,effect_id,descr) VALUES ('7', '205', '1', 'AHAs are acid and exfoliants');
INSERT INTO ingredient_effect (ingr_eff_id,ingr_id,effect_id,descr) VALUES ('8', '4', '1', 'PHA are acid and exfoliants');
INSERT INTO ingredient_effect (ingr_eff_id,ingr_id,effect_id,descr) VALUES ('9', '5', '5', 'Vitamin C reduces sun damage');
INSERT INTO ingredient_effect (ingr_eff_id,ingr_id,effect_id,descr) VALUES ('10', '5', '3', 'Vitamin C helps to moustisure skin');
INSERT INTO ingredient_effect (ingr_eff_id,ingr_id,effect_id,descr) VALUES ('11', '5', '8', 'Vitamin C is used for acne');
INSERT INTO ingredient_effect (ingr_eff_id,ingr_id,effect_id,descr) VALUES ('13', '6', '6', 'Benzoyl peroxide works by eeling away the skin to get rid of dead skin cells, excessive oil, and bacteria that may be trapped underneath');
INSERT INTO ingredient_effect (ingr_eff_id,ingr_id,effect_id,descr) VALUES ('14', '7', '3', 'Niacinamide is a powerful ingredient for both skin moisturization and skin brightening');
INSERT INTO ingredient_effect (ingr_eff_id,ingr_id,effect_id,descr) VALUES ('16', '9', '8', 'Salicylic acid helps against acne.');
INSERT INTO ingredient_effect (ingr_eff_id,ingr_id,effect_id,descr) VALUES ('17', '10', '3', 'Hyaluronic acid supplements can help increase skin moisture and reduce the appearance of fine lines and wrinkles.');
INSERT INTO ingredient_effect (ingr_eff_id,ingr_id,effect_id,descr) VALUES ('18', '11', '3', 'Retinoids reduce fine lines and wrinkles by increasing the production of collages, helping to mousture the skin.');
INSERT INTO ingredient_effect (ingr_eff_id,ingr_id,effect_id,descr) VALUES ('19', '20', '3', 'Glycerin is one of the most effective moisturisers as it helps your skin absorb moisture from the air. The clear liquid acts as a humectant (a substance that retains or preserves moisture) that stops the water in your skin from getting evaporated. Regular application of a glycerin moisturiser will always keep your skin feeling soft and hydrated.');


INSERT INTO skin (skin_id,skin_name,skin_desc) VALUES ('1', 'Normal', 'This is skin that has fine pores, healthy blood circulation, and a smooth texture. It can become dryer with aging in a condition that doctors may refer to as age-induced dryness.');
INSERT INTO skin (skin_id,skin_name,skin_desc) VALUES ('2', 'Dry', 'This skin produces less sebum than normal skin. This means that it is unable to lock in moisture and protect itself from external germs. People with dry skin may experience scaling, flakiness in patches, itchiness, and feelings of tightness.');
INSERT INTO skin (skin_id,skin_name,skin_desc) VALUES ('3', 'Oily', 'This type of skin overproduces sebum, sometimes due to hormonal changes, stress, and medication use. The skin usually has visible pores and a glossy shine, and it may be prone to acne.');
INSERT INTO skin (skin_id,skin_name,skin_desc) VALUES ('4', 'Combination skin', 'This skin has some areas that are oily and some that are dry. For example, people with combination skin may have an oily forehead, chin, and nose but normal-to-dry cheeks.');
INSERT INTO skin (skin_id,skin_name,skin_desc) VALUES ('5', 'Sensitive', 'People with sensitive skin are more prone to inflammation or adverse reactions. Sensitive skin can be a symptom of conditions such as rosacea or eczema.');
INSERT INTO skin (skin_id,skin_name,skin_desc) VALUES ('6', 'Rosacea', 'A condition that causes redness and often small, red, pus-filled bumps on the face. Rosacea most commonly affects middle-aged women with fair skin. It can be mistaken for acne or other skin conditions. Key symptoms are facial redness with swollen red bumps and small visible blood vessels. Treatments such as antibiotics or anti-acne medication can control and reduce symptoms. Left untreated, it tends to worsen over time.');
INSERT INTO skin (skin_id,skin_name,skin_desc) VALUES ('7', 'Psoriasis', 'A condition in which skin cells build up and form scales and itchy, dry patches. Psoriasis is thought to be an immune system problem. Triggers include infections, stress and cold. The most common symptom is a rash on the skin, but sometimes the rash involves the nails or joints. Treatment aims to remove scales and stop skin cells from growing so quickly. Topical ointments, light therapy and medication can offer relief.');

INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('1', '1', '204', '5', 'AHA acid that smooth fine lines, improve skin discoloration and protect against future damage by eliminating free radicals.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('3', '2', '201', '5', 'Glycolic, lactic, mandelic, and citric acids are considered AHAs, and theyre best on skin where breakouts are not a problem.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('4', '3', '205', '5', 'Glycolic acid exfoliates the surface of the skin, sweeping away the dead skin cells that become trapped inside pores and cause acne');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('5', '4', '205', '5', 'The mild strength and moisturizing properties of lactic acid make it a fantastic choice for those with dry skin for that much-needed hydration and gentle exfoliation.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('6', '4', '201', '5', 'Glycolic acid exfoliates the surface of the skin, sweeping away the dead skin cells that become trapped inside pores and cause acne');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('7', '5', '203', '5', 'Those with sensitive skin will want to stick to milder AHAs such as lactic acid and mandelic acid, which smooth and brighten the skin without causing irritation.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('8', '3', '9', '5', 'By fighting the germs that cause acne and reducing the inflammation that arises with clogged pores, salicylic acid helps clear the skin without adding shine or oil.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('9', '2', '202', '5', 'Glycolic, lactic, mandelic, and citric acids are considered AHAs, and theyre best on skin where breakouts are not a problem.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('10', '2', '203', '5', 'Glycolic, lactic, mandelic, and citric acids are considered AHAs, and theyre best on skin where breakouts are not a problem.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('11', '2', '204', '5', 'Glycolic, lactic, mandelic, and citric acids are considered AHAs, and theyre best on skin where breakouts are not a problem.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('12', '2', '205', '5', 'Glycolic, lactic, mandelic, and citric acids are considered AHAs, and theyre best on skin where breakouts are not a problem.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('13', '2', '20', '5', 'Glycerin is an excellent humectant by nature, ideal for dry skins.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('14', '4', '10', '5', 'Specialists recommends hyaluronic acid for combination skins because it both hydrates and smooths the appearance of fine lines without feeling greasy.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('15', '3', '20', '-5', 'Glycerin would contribute to make your skin more oily if its oily already.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('16', '2', '1', '-2', 'Retinol may cause sensitivity, redness, and peeling, and for those with sensitive skin, these side effects can sometimes be unbearable.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('17', '5', '1', '-2', 'Retinol may cause sensitivity, redness, and peeling, and for those with sensitive skin, these side effects can sometimes be unbearable.');
