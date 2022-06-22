create user root with encrypted password '1234';
grant all privileges on database skincare to skincare;
grant all privileges on database skincare to root;

\connect skincare

CREATE TABLE skin (
    skin_id	     INTEGER PRIMARY KEY,
    skin_name	 VARCHAR,
    skin_desc	 VARCHAR
);

CREATE TABLE account (
    account_id SERIAL,
    mail VARCHAR, 
    password VARCHAR,
    nombre VARCHAR, 
    country VARCHAR, 
    skin_id INTEGER REFERENCES skin(skin_id) ON DELETE CASCADE,
    fecha_nac DATE
);

CREATE TABLE ingredient (
    ingr_id         INTEGER PRIMARY KEY, 
    friendly_name   VARCHAR,
    ingr_name       VARCHAR, 
    ingr_desc       VARCHAR
);

CREATE TABLE category (
    cat_id       INTEGER PRIMARY KEY,
    cat_name     VARCHAR,
    cat_desc     VARCHAR
);

CREATE TABLE ingredient_ingredient (
    ingr1_id INTEGER REFERENCES ingredient(ingr_id) ON DELETE CASCADE,
    ingr2_id INTEGER REFERENCES ingredient(ingr_id) ON DELETE CASCADE,
    compatibility_points INTEGER,
    rel_desc VARCHAR,
    PRIMARY KEY (ingr1_id, ingr2_id),
    CHECK (ingr1_id > ingr2_id)
);

CREATE TABLE brand (
    brand_id	 INTEGER PRIMARY KEY,
    brand_name	 VARCHAR,
    country	     VARCHAR
);

CREATE TABLE product (
    prod_id	    INTEGER PRIMARY KEY,
    product_name	VARCHAR,
    brand_id        INTEGER REFERENCES brand(brand_id) ON DELETE CASCADE,
    url_img         VARCHAR
);

CREATE TABLE product_ingredient (
    prod_id	            INTEGER REFERENCES product(prod_id) ON DELETE CASCADE,
    ingr_id	            INTEGER REFERENCES ingredient(ingr_id) ON DELETE CASCADE,
    main                BOOLEAN,
    PRIMARY KEY (prod_id, ingr_id)
);

CREATE TABLE product_category (
    prod_id	        INTEGER REFERENCES product(prod_id) ON DELETE CASCADE,
    cat_id	        INTEGER REFERENCES category(cat_id) ON DELETE CASCADE,
    cat_desc	    VARCHAR,
    PRIMARY KEY (prod_id, cat_id)
);

CREATE TABLE skin_ingredient 
(
    skin_ingr_id            INTEGER PRIMARY KEY,
    skin_id                 INTEGER REFERENCES skin(skin_id) ON DELETE CASCADE,
    ingr_id	                INTEGER REFERENCES ingredient(ingr_id) ON DELETE CASCADE,
    compatibility_points	INTEGER,
    rel_desc	            VARCHAR
);

grant all privileges on table ingredient, category, product, brand, skin, ingredient_ingredient, product_category, skin_ingredient to skincare;

INSERT INTO skin (skin_id,skin_name,skin_desc) VALUES ('1', 'Normal', 'This is skin that has fine pores, healthy blood circulation, and a smooth texture. It can become dryer with aging in a condition that doctors may refer to as age-induced dryness.');
INSERT INTO skin (skin_id,skin_name,skin_desc) VALUES ('2', 'Dry', 'This skin produces less sebum than normal skin. This means that it is unable to lock in moisture and protect itself from external germs. People with dry skin may experience scaling, flakiness in patches, itchiness, and feelings of tightness.');
INSERT INTO skin (skin_id,skin_name,skin_desc) VALUES ('3', 'Oily', 'This type of skin overproduces sebum, sometimes due to hormonal changes, stress, and medication use. The skin usually has visible pores and a glossy shine, and it may be prone to acne.');
INSERT INTO skin (skin_id,skin_name,skin_desc) VALUES ('4', 'Combination skin', 'This skin has some areas that are oily and some that are dry. For example, people with combination skin may have an oily forehead, chin, and nose but normal-to-dry cheeks.');
INSERT INTO skin (skin_id,skin_name,skin_desc) VALUES ('5', 'Sensitive', 'People with sensitive skin are more prone to inflammation or adverse reactions. Sensitive skin can be a symptom of conditions such as rosacea or eczema.');
INSERT INTO skin (skin_id,skin_name,skin_desc) VALUES ('6', 'Rosacea', 'A condition that causes redness and often small, red, pus-filled bumps on the face. Rosacea most commonly affects middle-aged women with fair skin. It can be mistaken for acne or other skin conditions. Key symptoms are facial redness with swollen red bumps and small visible blood vessels. Treatments such as antibiotics or anti-acne medication can control and reduce symptoms. Left untreated, it tends to worsen over time.');
INSERT INTO skin (skin_id,skin_name,skin_desc) VALUES ('7', 'Psoriasis', 'A condition in which skin cells build up and form scales and itchy, dry patches. Psoriasis is thought to be an immune system problem. Triggers include infections, stress and cold. The most common symptom is a rash on the skin, but sometimes the rash involves the nails or joints. Treatment aims to remove scales and stop skin cells from growing so quickly. Topical ointments, light therapy and medication can offer relief.');


INSERT INTO account (account_id,mail,password,nombre,country,skin_id,fecha_nac) 
VALUES ('1', 'pepe@gmail.com', '1234', 'Pepe Pistolero', 'AR', '2', TO_DATE('18/06/2000', 'DD/MM/YYYY'));

INSERT INTO brand (brand_id,brand_name,country) VALUES ('1', 'NEUTROGENA', 'US');
INSERT INTO brand (brand_id,brand_name,country) VALUES ('2', 'LOREAL', 'FR');
INSERT INTO brand (brand_id,brand_name,country) VALUES ('3', 'GARNIER', 'FR');
INSERT INTO brand (brand_id,brand_name,country) VALUES ('4', 'ACF', 'AR');
INSERT INTO brand (brand_id,brand_name,country) VALUES ('5', 'ST IVES_UNILEVER', 'US');
INSERT INTO brand (brand_id,brand_name,country) VALUES ('6', 'DERMAGLOS_ANDROMACO', 'AR');
INSERT INTO brand (brand_id,brand_name,country) VALUES ('7', 'NIVEA', 'DE');
INSERT INTO brand (brand_id,brand_name,country) VALUES ('8', 'CETAPHIL', 'US');
INSERT INTO brand (brand_id,brand_name,country) VALUES ('9', 'LA ROCHE POSAY_LOREAL', 'FR');
INSERT INTO brand (brand_id,brand_name,country) VALUES ('10', 'CLINIQUE', 'US');
INSERT INTO brand (brand_id,brand_name,country) VALUES ('11', 'AVON', 'AR');
INSERT INTO brand (brand_id,brand_name,country) VALUES ('12', 'NATURA', 'BR');
INSERT INTO brand (brand_id,brand_name,country) VALUES ('13', 'VICHY', 'US');
INSERT INTO brand (brand_id,brand_name,country) VALUES ('14', 'THE CHEMIST LOOK', 'US');
INSERT INTO brand (brand_id,brand_name,country) VALUES ('15', 'TODOMODA Beauty', 'AR');
INSERT INTO brand (brand_id,brand_name,country) VALUES ('16', 'LIDHERMA', 'AR');
INSERT INTO brand (brand_id,brand_name,country) VALUES ('17', 'VANSAME', 'AR');
INSERT INTO brand (brand_id,brand_name,country) VALUES ('18', 'DERMA-E', 'AR');
INSERT INTO brand (brand_id,brand_name,country) VALUES ('19', 'AVENE', 'FR');
INSERT INTO brand (brand_id,brand_name,country) VALUES ('20', 'EUCERIN', 'GR');
INSERT INTO brand (brand_id,brand_name,country) VALUES ('21', 'ISDIN', 'ES');


INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('1', 'Serum Vitamina C', '11', 'https://staticar.natura.com/cdn/ff/hk1QzRRH0aY4rBXF4UjoMXt0w_6Rn8akBMsDvPx0jzY/1652785250/public/products/586420_1_8.jpg');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('2', 'Serum Ácido Hialurónico', '11', 'https://staticar.natura.com/cdn/ff/hk1QzRRH0aY4rBXF4UjoMXt0w_6Rn8akBMsDvPx0jzY/1652785250/public/products/586420_1_8.jpg');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('3', 'Protector Solar 50 FPS Ultra Mate', '11', 'https://staticar.natura.com/cdn/ff/BE7v8EINJ5gf28FPUu4p-uiyMndhbtfd0DxymYbnTo0/1652788423/public/products/112540_1_2.jpg');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('4', 'UV Face Soothing Sensitive Cream Spf50+', '7', 'https://incidecoder-content.storage.googleapis.com/79b47541-1f67-448e-b6c3-3b4b4d58859b/products/nivea-sun-uv-face-soothing-sensitive-cream-spf50/nivea-sun-uv-face-soothing-sensitive-cream-spf50_front_photo_300x300@2x.webp');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('5', 'Cápsulas Vitamina C', '11', 'https://staticar.natura.com/cdn/ff/Ezye--bkbxIojxee8QfdCf_I7F-iA13E3yGNQ9QgK_0/1652792438/public/products/120659_1_2.jpg');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('6', 'Chronos 60+ Dia', '12', 'https://incidecoder-content.storage.googleapis.com/76234890-7da5-4ee6-abba-1aaa840614a1/products/natura-chrono-60-dia/natura-chrono-60-dia_front_photo_300x300@2x.webp');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('7', 'Chronos 60+ Noite', '12', 'https://incidecoder-content.storage.googleapis.com/96c14112-d790-4f94-a45a-8ba4e05b7253/products/natura-chronos-60-noite/natura-chronos-60-noite_front_photo_300x300@2x.webp');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('8', 'Chronos Exfoliante Antiseñales', '12', 'https://incidecoder-content.storage.googleapis.com/afcd6e30-6b6c-4e94-b7c7-dc8ab9dab046/products/natura-chronos-exfoliante-antisenales/natura-chronos-exfoliante-antisenales_front_photo_300x300@2x.webp');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('9', 'Chronos Creme De Dia Para Rosto Pele Seca A Normal', '12', 'https://incidecoder-content.storage.googleapis.com/6e219ddc-6cfa-401e-aa05-5b73ed9b648f/products/natura-creme-de-dia-para-rosto-pele-seca-a-normal/natura-creme-de-dia-para-rosto-pele-seca-a-normal_front_photo_300x300@2x.webp');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('10', 'Chronos Firmeza Y Radiancia +45', '12', 'https://incidecoder-content.storage.googleapis.com/89fc38ae-c2be-45fa-8ad6-a5fe30597094/products/natura-chronos-firmeza-y-radiancia-45/natura-chronos-firmeza-y-radiancia-45_front_photo_300x300@1x.webp');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('11', 'Effaclear limpiador facial', '9', 'https://saludglobal.vteximg.com.br/arquivos/ids/161802-1000-1000/3337872411991.jpg?v=637433000466500000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('12', 'Tratamiento Antiimperfecciones Vichy', '13', 'https://farmacityar.vteximg.com.br/arquivos/ids/192553-600-600/213189_normaderm-phytosolution-vichy-doble-correcion-x-50-ml_imagen-2.jpg?v=637123813784430000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('13', 'Tónico Neutrogena Acne Proofing', '1', 'https://farmacityar.vteximg.com.br/arquivos/ids/179308-600-600/201246_neutrogena-acne-proofing-exfoliante_imagen-1.jpg?v=636678345141130000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('14', 'RadianceBoost Hydrogel Face Mask', '1', 'https://farmacityar.vteximg.com.br/arquivos/ids/186649-600-600/210558_mascara-facial-neutrogena-hydro-boost-x-30-ml_imagen-1.jpg?v=636976755317530000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('15', 'Neutrogena Bright Boost Gel-Crema Facial Anti-edad', '1', 'https://farmacityar.vteximg.com.br/arquivos/ids/214474-600-600/223721_crema-facial-neutrogena-bright-boost-brightening-gel-x-50-g_imagen-1.jpg?v=637662961944700000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('16', 'Fine Fairness Brightening Serum', '1', 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/ngn/ngn11122/v/6.jpg');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('17', 'Sun Fresh Derm Care FPS70', '1', 'https://http2.mlstatic.com/D_NQ_NP_2X_610977-MLA29556228697_032019-F.webp');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('18', 'Contorno Ojos Rápida Acción Múltiple', '1', 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/ngn/ngn02123/v/18.jpg');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('19', 'Sérum facial con pha', '15', 'https://ar.todomoda.com/media/catalog/product/7/6/76361101_0_1_20210917120139.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('20', 'Sérum facial con niacinamida', '15', 'https://ar.todomoda.com/media/catalog/product/7/6/76361001_0_1_20211130180959.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('21', 'Tónico Exfoliante c/ Ácido Mandélico', '14', 'https://cdn.shopify.com/s/files/1/0073/0808/3298/products/IMG_9793_F_600x.jpg?v=1638283808');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('22', 'Booster Vitamina C + Acido Ferúlico', '14', 'https://cdn.shopify.com/s/files/1/0073/0808/3298/products/IMG_0110_2_600x_082ac8e2-d415-4cd0-aa7c-599ff5a3916c_600x.jpg?v=1652704141');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('23', 'Lidherma Acnex Depure Control Topic', '16', 'https://http2.mlstatic.com/D_NQ_NP_2X_994848-MLA46306085998_062021-F.webp');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('24', 'Vansame Gs Tratamiento De Pieles Acneicas  Gel', '17', 'https://pedidosfarma.vteximg.com.br/arquivos/ids/177751-300-300/Vansame-Gs-Tratamiento-De-Pieles-Acneicas-Gel-30g-.jpg?v=637396009208000000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('25', 'DERMA-E - Crema facial C/ Ácido Ferulico', '18', 'https://es.luckyvitamin.com/images/Product/large/190203_1.jpg');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('26', 'Exfoliante SA', '14', 'https://cdn.shopify.com/s/files/1/0073/0808/3298/products/IMG_9788_F_600x_e9d7c8ff-1b9a-4376-8eb5-edcb5d6adbec_600x.jpg?v=1636556014');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('27', 'Corrector Antimperfecciones Effaclar Duo [+] APF x 40 ml', '9', 'https://farmacityar.vteximg.com.br/arquivos/ids/159347-600-600/125368_corrector-antimperfecciones-effaclar-duo-x-40ml_imagen-1.jpg?v=636670314598370000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('28', 'Gel Microexfoliante Effaclar x 200 ml', '9', 'https://farmacityar.vteximg.com.br/arquivos/ids/208068-600-600/220631_gel-microexfoliante-la-roche-posay-effaclar-x-200-ml_imagen-1.jpg?v=637503780801400000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('29', 'Tratamiento Diario Normaderm Phytosolution Doble Correción x 50 ml', '13', 'https://farmacityar.vteximg.com.br/arquivos/ids/192553-600-600/213189_normaderm-phytosolution-vichy-doble-correcion-x-50-ml_imagen-2.jpg?v=637123813784430000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('30', 'Arcilla de Limpieza Facial Normaderm Phytosolution', '13', 'https://farmacityar.vteximg.com.br/arquivos/ids/204526-600-600/219194_arcilla-de-limpieza-facial-vichy-normaderm-phytosolution_imagen-1.jpg?v=637395972851670000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('31', 'Sérum Triple Efecto Dermopure Oil Control para Manchas Post Acné x 40 ml', '20', 'https://farmacityar.vteximg.com.br/arquivos/ids/220438-1000-1000/225138_serum-facial-eucerin-dermpure-oil-control-x-40-ml_imagen-1.jpg?v=637831373584570000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('32', 'Gel Crema Teen Skin Rx Acniben Repair x 40 ml', '21', 'https://farmacityar.vteximg.com.br/arquivos/ids/166592-600-600/115857_gel-crema-hidratante-acniben-ts-repair-x-40-ml_imagen-1.jpg?v=636670341862070000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('33', 'Espuma Micelar de Limpieza Dermatoclean con Ácido Hialurónico x 150 ml', '20', 'https://farmacityar.vteximg.com.br/arquivos/ids/220364-600-600/216552_espuma-micelar-eucerin-dermatoclean-x-150-ml_imagen-1.jpg?v=637831184640730000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('34', 'Gel Limpiador Diario Dermopure Oil Control para Piel Grasa x 400 ml', '20', 'https://farmacityar.vteximg.com.br/arquivos/ids/203655-600-600/200398_eucerin-dermopure-oil-control-gel-limpiador-200398_imagen-1.png?v=637375919984070000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('35', 'Dermaglós Protector Solar FPS 50 c/ Vitamina E', '6', 'https://farmacityar.vteximg.com.br/arquivos/ids/183183-600-600/135868_protector-fps-50-con-vitamina-e-resistente-al-agua-x-250-ml_imagen-1.jpg?v=636831510820470000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('36', 'Sérum Antiedad Hyalu B5 Pieles Sensibles X 30 ml', '9', 'https://farmacityar.vteximg.com.br/arquivos/ids/190639-600-600/200264_hyalu-b5-serum_imagen-1.jpg?v=637074370052970000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('37', 'Sérum Antiedad Retinol B3 x 30 ml', '9', 'https://farmacityar.vteximg.com.br/arquivos/ids/198157-600-600/215779_serum-antiedad-la-roche-posay-retinol-b3-x-30-ml_imagen-1.jpg?v=637243677263470000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('38', 'Serum Pure Vitamin C 10 x 30 Ml', '9', 'https://farmacityar.vteximg.com.br/arquivos/ids/185341-600-600/209867_serum-la-roche-posay-pure-vitamin-c-10-x-30-ml_imagen-1.jpg?v=636955236734530000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('39', 'Limpiador c/ Ácido Citrico', '14', 'https://cdn.shopify.com/s/files/1/0073/0808/3298/products/IMG_0099_600x_51cfa6d9-5d6f-4065-8570-d9890c922346_600x.jpg?v=1636555670');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('40', 'Sérum Facial Antiedad Eucerin Hyaluron-Filler Vitaminc C Booster x 8 ml', '20', 'https://farmacityar.vteximg.com.br/arquivos/ids/220404-600-600/221614_serum-facial-eucerin-hyaluron-filler-vitamin-c-booster-x-8-ml_imagen-1.jpg?v=637831303986430000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('41', 'Crema Antiedad de Día Eucerin Hyaluron-Filler + Elasticity Fps 15 x 50 ml', '20', 'https://farmacityar.vteximg.com.br/arquivos/ids/220435-600-600/160251_crema-de-dia-eucerin-pieles-maduras-fps-15-elasticity-filler-x-50-ml_imagen-1.jpg?v=637831363970470000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('42', 'Crema Antiedad de Noche Eucerin Hyaluron-Filler + Elasticity Fps 15 x 50 ml', '20', 'https://farmacityar.vteximg.com.br/arquivos/ids/180586-600-600/160252_crema-de-noche-para-pieles-maduras-elasticity-filler-x-50-ml_imagen-1.jpg?v=636736679648270000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('43', 'Sérum Facial Vichy Liftactiv Supreme Vitamina C x 20 ml', '13', 'https://farmacityar.vteximg.com.br/arquivos/ids/221424-600-600/227005_serum-facial-vichy-liftactiv-supreme-vitamina-c-x-20-ml_imagen-3.jpg?v=637852864962470000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('44', 'Crema de día Vichy Liftactiv Collagen Specialist x 50 Ml', '13', 'https://farmacityar.vteximg.com.br/arquivos/ids/185390-600-600/209180_crema-de-dia-vichy-liftactiv-collagen-specialist-x-50-ml_imagen-1.jpg?v=636959595898630000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('45', 'Crema Facial Antiedad Isdin Glicoisdin 8% x 50 ml', '21', 'https://farmacityar.vteximg.com.br/arquivos/ids/220934-600-600/216308_crema-facial-antiedad-isdin-glicoisdin-8-_-x-50-ml_imagen-1.jpg?v=637841595169630000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('46', 'Crema Contorno de Ojos Antioxidante Avene Alisadora x 15 ml', '19', 'https://farmacityar.vteximg.com.br/arquivos/ids/222281-600-600/215138_crema-contorno-de-ojos-antioxidante-avene-alisadora-x-15-ml_imagen-2.jpg?v=637877127953230000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('47', 'Crema Facial Antioxidante Avene Día x 30 ml', '19', 'https://farmacityar.vteximg.com.br/arquivos/ids/222275-600-600/215136_crema-facial-antioxidante-avene-dia-x-30-ml_imagen-2.jpg?v=637877052309300000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('48', 'Sérum Facial Ultraligero Eucerin Hyaluron-Filler Pore Minimizer x 30 ml', '20', 'https://farmacityar.vteximg.com.br/arquivos/ids/220428-600-600/221613_serum-facial-eucerin-hyaluron-filler-pore-minimizer-x-30-ml_imagen-1.jpg?v=637831323302070000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('49', 'Sérum Efecto Peeling Noche Eucerin Hyaluron-Filler Antiedad x 30 ml', '20', 'https://farmacityar.vteximg.com.br/arquivos/ids/190900-1000-1000/206597_serum-efecto-peeling-eucerin-hyaluron-filler-noche-x-30-ml_imagen-1.jpg?v=637080383060800000');
INSERT INTO product (prod_id,product_name,brand_id,url_img) VALUES ('50', 'Crema Antiedad La Roche-Posay Redermic Hyalu C Piel Normal a Mixta x 40 ml', '9', 'https://farmacityar.vteximg.com.br/arquivos/ids/199810-600-600/137988_fluido-antiedad-redermic-hyalu-c-piel-normal-a-mixta-x-40-ml_imagen-1.jpg?v=637280183648970000');






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



INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('205', '1', '-5', 'Experts generally advise not using the two ingredients (any AHAs + Retinol) at the exact same time, since this can lead to dryness and irritation.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('205', '7', '5', 'Using AHA and Niacinamide together will double the benefits of brightening, fading pigmentation, and reducing wrinkles');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('205', '5', '-5', 'Experts generally advice not using the two ingredients (any AHAs + Vitamin C) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('205', '9', '5', 'Experts generally advice not using the two ingredients (any AHAs + BHAs) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('205', '10', '5', 'AHA  can be mixed with moisturizing ingredients like hyaluronic acid to get effective result, just ensure you are not using AHA during the day.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('205', '201', '-5', 'Experts generally advice not using the two ingredients (any AHAs + AHAs) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('205', '202', '-5', 'Experts generally advice not using the two ingredients (any AHAs + AHAs) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('205', '203', '-5', 'Experts generally advice not using the two ingredients (any AHAs + AHAs) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('205', '204', '5', 'Together, these two AHAs smooth fine lines, improve skin discoloration and protect against future damage by eliminating free radicals.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('204', '7', '5', 'Using AHA and Niacinamide together will double the benefits of brightening, fading pigmentation, and reducing wrinkles');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('204', '1', '-5', 'Experts generally advise not using the two ingredients (any AHAs + Retinol) at the exact same time, since this can lead to dryness and irritation.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('204', '5', '-5', 'Experts generally advice not using the two ingredients (any AHAs + Vitamin C) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('204', '9', '5', 'Experts generally advice not using the two ingredients (any AHAs + BHAs (salicilyc acid)) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('204', '10', '5', 'AHA  can be mixed with moisturizing ingredients like hyaluronic acid to get effective result, just ensure you are not using AHA during the day.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('204', '201', '-5', 'Experts generally advice not using the two ingredients (any AHAs + AHAs) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('204', '202', '-5', 'Experts generally advice not using the two ingredients (any AHAs + AHAs) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('204', '203', '-5', 'Experts generally advice not using the two ingredients (any AHAs + AHAs) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('204', '20', '10', 'Citric acid and glycerin make a perfect combination to keep your skin cleaner than ever!');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('203', '7', '5', 'Using AHA and Niacinamide together will double the benefits of brightening, fading pigmentation, and reducing wrinkles');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('203', '1', '-5', 'Experts generally advise not using the two ingredients (any AHAs + Retinol) at the exact same time, since this can lead to dryness and irritation.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('203', '5', '-5', 'Experts generally advice not using the two ingredients (any AHAs + Vitamin C) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('203', '9', '5', 'Experts generally advice not using the two ingredients (any AHAs + BHAs (salicilyc acid)) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('203', '10', '5', 'AHA  can be mixed with moisturizing ingredients like hyaluronic acid to get effective result, just ensure you are not using AHA during the day.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('203', '201', '-5', 'Experts generally advice not using the two ingredients (any AHAs + AHAs) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('203', '202', '-5', 'Experts generally advice not using the two ingredients (any AHAs + AHAs) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('202', '7', '5', 'Using AHA and Niacinamide together will double the benefits of brightening, fading pigmentation, and reducing wrinkles');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('202', '1', '-5', 'Experts generally advise not using the two ingredients (any AHAs + Retinol) at the exact same time, since this can lead to dryness and irritation.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('202', '5', '-5', 'Experts generally advice not using the two ingredients (any AHAs + Vitamin C) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('202', '9', '5', 'Experts generally advice not using the two ingredients (any AHAs + BHAs (salicilyc acid)) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('202', '10', '5', 'AHA  can be mixed with moisturizing ingredients like hyaluronic acid to get effective result, just ensure you are not using AHA during the day.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('202', '201', '-5', 'Experts generally advice not using the two ingredients (any AHAs + AHAs) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('201', '7', '5', 'Using AHA and Niacinamide together will double the benefits of brightening, fading pigmentation, and reducing wrinkles');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('201', '1', '-5', 'Experts generally advise not using the two ingredients (any AHAs + Retinol) at the exact same time, since this can lead to dryness and irritation.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('201', '5', '-5', 'Experts generally advice not using the two ingredients (any AHAs + Vitamin C) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('201', '9', '5', 'Experts generally advice not using the two ingredients (any AHAs + BHAs (salicilyc acid)) at the exact same time, as are both acids and unstable affecting skin pH levels.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('201', '10', '5', 'AHA  can be mixed with moisturizing ingredients like hyaluronic acid to get effective result, just ensure you are not using AHA during the day.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('20', '1', '5', 'One ingredient that can help prevent irritation when using a retinol-containing product is glycerin, a powerful humectant that helps draw water to the skin.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('20', '10', '-1', 'Both humectants are compatible and commonly used together because it leaves the skin shining.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('10', '1', '5', 'Can hyaluronic acid and retinol be used together? Unlike many other skin care ingredients out there, hyaluronic acid and retinol can be used in the same skincare routine. Not only that, but using them together can help to lessen the severity of the side effects that often come with retinol usage.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('10', '5', '3', 'Hyaluronic acid helps keep skin moisturized, while vitamin C protects from sun damage and can help fade skin discoloration. Both ingredients can help reduce the signs of aging in skin  especially when theyre used together.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('10', '6', '5', 'Benzoyl peroxide can be mixed with moisturizing ingredients like hyaluronic acid to get effective results, just ensure you are not using BHAs during the day');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('10', '7', '0', 'Hyaluronic acid and niacinamide are water-based treatments that complement each others hydrating effects and can be used together.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('10', '9', '5', 'BHA can be mixed with moisturizing ingredients like hyaluronic acid to get effective results, just ensure you are not using BHAs during the day');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('9', '1', '-2', 'Salicylic acid and Retinol used together in the same skin routine would cause dryness if they are applied oftenly.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('9', '4', '-4', 'If you mix Vitamin C with PHAs and they are not formulated properly, they may negate the efficacy of both');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('6', '1', '-4', 'It is useless to use benzoyl peroxide, which is usually used to treat acne, and retinol together.The ingredients can cancel the positive effects of each other out and leave skin extremely dry and irritated.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('6', '4', '-5', 'You should avoid using Vit. C with benzoyl peroxide, which can oxidize the Vit. C and, therefore, make it less potent. You can still use your benzoyl peroxide products, just not in the same part of your routine as the Vit.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('5', '1', '-2', 'Vitamin C and Retinol used together in the same skin routine would case dryness. Use it in different routines, vitamin C through the day and Retinol at the night. ');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('4', '1', '-3', 'Retinol if mixed with PHAs can result in unpredictable irritation.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('13', '7', '5', 'Research has shown niacinamide can interrupt the terrible inflammation UV light causes in the skin, so using a niacinamide booster under your sunscreen is a great way to protect and repair.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('14', '7', '5', 'Research has shown niacinamide can interrupt the terrible inflammation UV light causes in the skin, so using a niacinamide booster under your sunscreen is a great way to protect and repair.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('15', '7', '5', 'Research has shown niacinamide can interrupt the terrible inflammation UV light causes in the skin, so using a niacinamide booster under your sunscreen is a great way to protect and repair.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('16', '7', '5', 'Research has shown niacinamide can interrupt the terrible inflammation UV light causes in the skin, so using a niacinamide booster under your sunscreen is a great way to protect and repair.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('13', '1', '5', 'Thats because retinoids like retinoic acid, retinol, and other popular chemical exfoliants gently scrub away dead skin cells, which leaves skin more open to potential sun damage.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('14', '1', '5', 'Thats because retinoids like retinoic acid, retinol, and other popular chemical exfoliants gently scrub away dead skin cells, which leaves skin more open to potential sun damage.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('15', '1', '5', 'Thats because retinoids like retinoic acid, retinol, and other popular chemical exfoliants gently scrub away dead skin cells, which leaves skin more open to potential sun damage.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('16', '1', '5', 'Thats because retinoids like retinoic acid, retinol, and other popular chemical exfoliants gently scrub away dead skin cells, which leaves skin more open to potential sun damage.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('13', '11', '5', 'Thats because retinoids like retinoic acid, retinol, and other popular chemical exfoliants gently scrub away dead skin cells, which leaves skin more open to potential sun damage.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('14', '11', '5', 'Thats because retinoids like retinoic acid, retinol, and other popular chemical exfoliants gently scrub away dead skin cells, which leaves skin more open to potential sun damage.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('15', '11', '5', 'Thats because retinoids like retinoic acid, retinol, and other popular chemical exfoliants gently scrub away dead skin cells, which leaves skin more open to potential sun damage.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('16', '11', '5', 'Thats because retinoids like retinoic acid, retinol, and other popular chemical exfoliants gently scrub away dead skin cells, which leaves skin more open to potential sun damage.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('13', '5', '5', 'Combining your sunscreen with a vitamin C serum will not only double-protect your skin but also make it better with every use.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('14', '5', '5', 'Combining your sunscreen with a vitamin C serum will not only double-protect your skin but also make it better with every use.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('15', '5', '5', 'Combining your sunscreen with a vitamin C serum will not only double-protect your skin but also make it better with every use.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('16', '5', '5', 'Combining your sunscreen with a vitamin C serum will not only double-protect your skin but also make it better with every use.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('9', '6', '-10', 'Avoid using any topical acne or peeling agent in the same area as benzoyl peroxide, such as salicylic acid.Benzoyl peroxide and salicylic acid both have exfoliating effects, and using them at the same time can overdry the skin');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('18', '7', '10', 'Vitamin C and niacinamide are two popular ingredients that offer a host of potential benefits, from helping relieve inflammation to brightening your skin.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('201', '6', '-5', 'Using them at the same time can lead to excessively dry skin.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('202', '6', '-5', 'Using them at the same time can lead to excessively dry skin.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('203', '6', '-5', 'Using them at the same time can lead to excessively dry skin.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('204', '6', '-5', 'Using them at the same time can lead to excessively dry skin.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('205', '6', '-5', 'Using them at the same time can lead to excessively dry skin.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('6', '5', '-2', 'You should avoid using Vit. C with benzoyl peroxide, which can oxidize the Vit. C and, therefore, make it less potent');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('7', '6', '5', 'With benzoyl peroxide penetrating further into the skin, it can sometimes cause some irritation and dryness. The humectant traits of niacinamide ensure it is able to lock moisture into the outer layers of the skin keeping it hydrated and healthy');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('11', '6', '-5', 'It is not recommended to use benzoyl peroxide and retinoids together as they can literally cancel each other out rendering them less effective');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('18', '6', '5', 'Vitamin E and benzoyl peroxide dont affect each other so they are good to use together');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('18', '14', '10', 'Vitamin E and avobenzone potentiates their effect together to protect yout skin from sunburn damage.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('19', '6', '-10', 'Together, they can do the exact opposite of what you want them to do and end up temporarily staining your skin');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('7', '1', '5', 'Because retinol runs the chance of initially causing irritation, niacinamide can be used to stabilize your skins barrier and reduce the amount of water lost, increasing your overall hydration levels');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('7', '5', '5', 'Vitamin C and niacinamide dont affect each other so they are good to use together');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('9', '7', '10', 'The simple answer is yes. They complement each other well. Being oil soluble, salicylic acid can penetrate deeper into the skin layers, but it can also dehydrate and irritate skin. Niacinamide, on the other hand, reduces inflammation and boosts skins natural moisturization.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('17', '1', '5', 'While Retinol is working on firming the skin and adding radiance & luminosity, Ferulic Acid allows the Retinol to work even deeper into the skin while promoting collagen production. Together, Ferulic Acid and Retinol are an incredible combination');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('201', '17', '-5', 'Dont use ferulic acid with Exfoliating acids like glycolic, lactic, and salicylic acids because they can alter the pH, which then changes the effectiveness of the antioxidant.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('202', '17', '-5', 'Dont use ferulic acid with Exfoliating acids like glycolic, lactic, and salicylic acids because they can alter the pH, which then changes the effectiveness of the antioxidant.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('203', '17', '-5', 'Dont use ferulic acid with Exfoliating acids like glycolic, lactic, and salicylic acids because they can alter the pH, which then changes the effectiveness of the antioxidant.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('204', '17', '-5', 'Dont use ferulic acid with Exfoliating acids like glycolic, lactic, and salicylic acids because they can alter the pH, which then changes the effectiveness of the antioxidant.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('205', '17', '-5', 'Dont use ferulic acid with Exfoliating acids like glycolic, lactic, and salicylic acids because they can alter the pH, which then changes the effectiveness of the antioxidant.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('17', '5', '5', 'Ferulic acid not only increases their antioxidant benefits, but also better stabilizes them.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('18', '17', '5', 'Ferulic acid not only increases their antioxidant benefits, but also better stabilizes them.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('17', '7', '5', 'Combining niacinamide and botanical ferulic acid offers its own set of powerful benefits, such as brightening the appearance of the skin and evening out the skins texture');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('17', '9', '-5', 'Dont use ferulic acid with Exfoliating acids like glycolic, lactic, and salicylic acids because they can alter the pH, which then changes the effectiveness of the antioxidant.');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('18', '1', '5', 'Vitamins A, C, and Eeven in combinationremain stable and effective under a broad-spectrum sunscreen');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('18', '5', '5', 'Vitamins A, C, and Eeven in combinationremain stable and effective under a broad-spectrum sunscreen');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('205', '18', '5', 'Combinations of either vitamin E or melatonin with glycolic acid, in a 1:5 to 1:200 molar ratio, resulted in a clear synergistic protection of liposomes');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('18', '10', '5', 'Yes, you certainly can use hyaluronic acid with vitamin C and E. Including all three in your routine will help you reap the rewards of these potent powerhouses');
INSERT INTO ingredient_ingredient (ingr1_id,ingr2_id,compatibility_points,rel_desc) VALUES ('20', '18', '5', 'Combine this with Vitamin E oil and you have a power pack for soft skin. All the ingredients mentioned above are to be mixed together.');





INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('50', '5', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('50', '10', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('49', '10', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('49', '13', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('49', '20', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('48', '10', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('48', '20', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('48', '201', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('48', '204', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('48', '205', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('47', '5', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('47', '10', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('47', '18', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('47', '20', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('46', '1', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('45', '205', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('44', '5', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('43', '5', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('43', '18', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('42', '10', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('42', '20', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('41', '10', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('41', '20', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('40', '5', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('40', '10', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('40', '20', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('39', '20', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('39', '204', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('38', '5', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('38', '9', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('37', '1', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('37', '20', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('36', '10', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('35', '14', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('35', '15', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('35', '18', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('34', '9', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('34', '204', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('33', '20', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('32', '20', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('31', '9', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('31', '20', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('31', '204', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('30', '9', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('29', '9', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('29', '10', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('28', '9', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('27', '7', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('27', '9', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('27', '20', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('26', '9', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('26', '20', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('25', '5', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('25', '17', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('24', '9', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('24', '205', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('23', '6', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('23', '9', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('23', '205', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('22', '1', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('22', '5', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('22', '17', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('22', '18', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('21', '20', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('21', '201', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('21', '203', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('20', '7', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('19', '4', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('18', '4', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('18', '20', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('17', '1', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('17', '13', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('17', '15', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('16', '1', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('16', '7', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('16', '20', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('15', '4', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('15', '203', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('14', '10', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('13', '9', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('13', '20', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('12', '9', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('12', '10', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('12', '20', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('11', '9', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('11', '20', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('10', '18', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('9', '18', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('8', '20', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('8', '204', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('8', '205', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('7', '18', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('7', '201', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('6', '15', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('5', '5', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('4', '15', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('4', '16', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('3', '13', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('3', '15', 'N');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('3', '16', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('2', '10', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('1', '5', 'Y');
INSERT INTO product_ingredient (prod_id,ingr_id,main) VALUES ('1', '20', 'N');


INSERT INTO category (cat_id,cat_name,cat_desc) VALUES ('1', 'Exfoliant', 'Exfoliating is the process of removing dead skin cells from the surface of your skin using a chemical, granular substance, or exfoliation tool. ');
INSERT INTO category (cat_id,cat_name,cat_desc) VALUES ('2', 'Hydrating', 'Hydration is the absorption of moisture from the air and then infusing your cells with water to improve your skins ability to absorb moisture and nutrients. Moisturizing is about trapping and locking in the moisture to build your skins natural protective barrier.');
INSERT INTO category (cat_id,cat_name,cat_desc) VALUES ('3', 'Mosturizer', 'Moisturizing everyday can reduce the chance of developing extreme dryness or oiliness. Both extremes are harmful for skin and cause common skin conditions like acne. Conceals Other Skin Blemishes. Using a daily moisturizer ensures that the skins blemishes are camouflaged.');
INSERT INTO category (cat_id,cat_name,cat_desc) VALUES ('4', 'Cleanser', 'Facial cleansers play an important role in your skincare routine. Face washes are designed to remove impurities, germs, dirt and makeup that can irritate the skin.');
INSERT INTO category (cat_id,cat_name,cat_desc) VALUES ('5', 'Sunscreen', 'Sunscreens are essential for protecting your skin from UV damage');
INSERT INTO category (cat_id,cat_name,cat_desc) VALUES ('6', 'Peeling', 'Peeling remove the outer layer of the skin, which means they tend to go deeper to remove more excess dead skin cells than exfoliators. ');
INSERT INTO category (cat_id,cat_name,cat_desc) VALUES ('7', 'Toner', 'Toner can be used after a cleanser twice a day to remove excess traces of makeup or other residue from the skin.');
INSERT INTO category (cat_id,cat_name,cat_desc) VALUES ('8', 'Acne', 'Treatments work to clear away bacteria and dry up the excess oils that lead to acne.');

INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('1', '5', 'Vitamin C reduces sun damage');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('1', '3', 'Vitamin C helps to moustisure skin');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('1', '8', 'Vitamin C is used for acne');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('2', '3', 'Hialuronic Acid and vitamin C is used to moistusre your skin.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('3', '5', 'Oxybenzone is an regulated ingredient excellent agent for sunburn protection.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('4', '5', 'Oxybenzone is an regulated ingredient excellent agent for sunburn protection.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('5', '5', 'Vitamin C reduces sun damage');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('5', '3', 'Vitamin C helps to moustisure skin');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('5', '8', 'Vitamin C is used for acne');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('6', '5', 'Homosalate is a regulated sunscreen agent. ');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('7', '1', 'AHAs are acid and exfoliants');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('7', '3', 'Vitamin E is an excellent moisture agent.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('7', '5', 'Vitamin E is good protecting against UV. ');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('8', '1', 'AHAs are acid and exfoliants');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('8', '3', 'Glycerin is an excellent skin moisturizer');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('8', '2', 'Glycerin is an excellent skin hydratant');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('9', '3', 'Vitamin E is an excellent moisture agent.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('9', '5', 'Vitamin E is good protecting against UV. ');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('10', '3', 'Vitamin E is an excellent moisture agent.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('10', '5', 'Vitamin E is good protecting against UV. ');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('11', '8', 'Salycilic acid is an excellent anti-acne agent, helps to remove excess of oil in the skin.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('12', '8', 'Salycilic acid is an excellent anti-acne agent, helps to remove excess of oil in the skin.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('13', '8', 'Salycilic acid is an excellent anti-acne agent, helps to remove excess of oil in the skin.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('14', '3', 'Hyaluronic Acid helps to moistusre your skin, reducin wrinckles, expresion lines with antiage properties.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('15', '3', 'PHA and mandelic acid helps to mostisure your skin, reduce wrinckles and expression lines');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('16', '3', 'Retinol is mainly used to mousture skin with a minimum exfoliant effect.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('16', '1', 'Retinol is mainly used to mousture skin with a minimum exfoliant effect.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('17', '5', 'Homosalate is a regulated sunscreen agent. ');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('18', '3', 'PHA helps to mostisure your skin, reduce wrinckles and expression lines');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('19', '3', 'PHA helps to mostisure your skin, reduce wrinckles and expression lines');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('20', '3', 'Niacinamida helps to mostisure your skin, reduce wrinckles and expression lines');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('21', '6', 'Mandelic Acid is an excellent peeling agent');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('22', '1', 'AHAs are acid and exfoliants');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('22', '5', 'Vitamin C reduces sun damage');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('22', '3', 'Vitamin C helps to moustisure skin');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('22', '8', 'Vitamin C is used for acne');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('23', '8', 'Benzagel is the preffered agent to solve acne issues!');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('24', '6', 'Glycolic acid acts as a peeling agent removind dead skin cells.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('25', '3', 'Ferulic acid is an agent that helps with moisturizing your skin, reducin wrincles and expression lines.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('26', '8', 'Salycilic acid is an excellent anti-acne agent, helps to remove excess of oil in the skin.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('27', '3', 'Niacinamida helps to mostisure your skin, reduce wrinckles and expression lines');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('28', '8', 'Salycilic acid is an excellent anti-acne agent, helps to remove excess of oil in the skin.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('29', '8', 'Salycilic acid is an excellent anti-acne agent, helps to remove excess of oil in the skin.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('30', '8', 'Salycilic acid is an excellent anti-acne agent, helps to remove excess of oil in the skin.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('31', '3', 'Glycerin is an excellent skin moisturizer');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('31', '2', 'Glycerin is an excellent skin hydratant');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('32', '3', 'Glycerin is an excellent skin moisturizer');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('32', '2', 'Glycerin is an excellent skin hydratant');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('33', '3', 'Glycerin is an excellent skin moisturizer');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('33', '2', 'Glycerin is an excellent skin hydratant');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('34', '4', 'Acid Citric is a excelent option for skin cleaner agent.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('35', '5', 'Avobenzone & Vitamin E are a greate combination to protect the skin of the sunlight during the day.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('36', '3', 'Hyaluronic Acid helps to moistusre your skin, reducin wrinckles, expresion lines with antiage properties.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('37', '3', 'Retinol is mainly used to mousture skin with a minimum exfoliant effect.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('37', '1', 'Retinol is mainly used to mousture skin with a minimum exfoliant effect.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('38', '3', 'Absorbic Acid (Vit. C) helps mostisuring the skin and salicylic acid to help vitamin c to penetrate the skin, maximizing its effect.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('39', '4', 'Glycerin & Acid Citric make a great combination for a cleaner skin.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('40', '3', 'Vitamin C and Hyaluronic acid are two agents that helps mostisuring the skin indepently, compatible between them which makes its combination a lot better.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('41', '3', 'Hyaluronic Acid helps to moistusre your skin, reducin wrinckles, expresion lines with antiage properties.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('42', '3', 'Hyaluronic Acid helps to moistusre your skin, reducin wrinckles, expresion lines with antiage properties.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('43', '3', 'Vitamin C and Vitamin E are agents that helps mostisuring the skin');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('43', '5', 'Vitamin E is good protecting against UV. ');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('44', '3', 'Vitamin C is agents that helps mostisuring the skin');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('45', '6', 'Glycolic acid acts as a peeling agent removind dead skin cells.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('46', '3', 'Retinol is mainly used to mousture skin with a minimum exfoliant effect.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('46', '1', 'Retinol is mainly used to mousture skin with a minimum exfoliant effect.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('47', '3', 'Vitamin C and Hyaluronic acid are two agents that helps mostisuring the skin indepently, compatible between them which makes its combination a lot better.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('47', '2', 'Glycerin is an excellent skin hydratant');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('47', '5', 'Vitamin E is good protecting against UV. ');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('48', '3', 'Hyaluronic Acid, Lactic Acid and Glycerin help to moistusre your skin, reducin wrinckles, expresion lines with antiage properties.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('48', '4', 'Acid Citric is an agent used as a cleanser.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('49', '3', 'Hyaluronic Acid and Glycering help to moistusre your skin, reducin wrinckles, expresion lines with antiage properties.');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('49', '5', 'Octocrylene is a regulated sunscreen agent that helps protecting skin against sunburn');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('50', '5', 'Vitamin C reduces sun damage');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('50', '3', 'Vitamin C helps to moustisure skin');
INSERT INTO product_category (prod_id,cat_id,cat_desc) VALUES ('50', '8', 'Vitamin C is used for acne');


INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('1', '1', '204', '5', 'AHA acid that smooth fine lines, improve skin discoloration and protect against future damage by eliminating free radicals.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('2', '2', '201', '5', 'Glycolic, lactic, mandelic, and citric acids are considered AHAs, and theyre best on skin where breakouts are not a problem.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('3', '3', '205', '5', 'Glycolic acid exfoliates the surface of the skin, sweeping away the dead skin cells that become trapped inside pores and cause acne');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('4', '4', '205', '5', 'The mild strength and moisturizing properties of lactic acid make it a fantastic choice for those with dry skin for that much-needed hydration and gentle exfoliation.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('5', '4', '201', '5', 'Glycolic acid exfoliates the surface of the skin, sweeping away the dead skin cells that become trapped inside pores and cause acne');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('6', '5', '203', '5', 'Those with sensitive skin will want to stick to milder AHAs such as lactic acid and mandelic acid, which smooth and brighten the skin without causing irritation.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('7', '3', '9', '5', 'By fighting the germs that cause acne and reducing the inflammation that arises with clogged pores, salicylic acid helps clear the skin without adding shine or oil.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('8', '2', '202', '5', 'Glycolic, lactic, mandelic, and citric acids are considered AHAs, and theyre best on skin where breakouts are not a problem.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('9', '2', '203', '5', 'Glycolic, lactic, mandelic, and citric acids are considered AHAs, and theyre best on skin where breakouts are not a problem.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('10', '2', '204', '5', 'Glycolic, lactic, mandelic, and citric acids are considered AHAs, and theyre best on skin where breakouts are not a problem.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('11', '2', '205', '5', 'Glycolic, lactic, mandelic, and citric acids are considered AHAs, and theyre best on skin where breakouts are not a problem.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('12', '2', '20', '5', 'Glycerin is an excellent humectant by nature, ideal for dry skins.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('13', '4', '10', '5', 'Specialists recommends hyaluronic acid for combination skins because it both hydrates and smooths the appearance of fine lines without feeling greasy.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('14', '3', '20', '-2', 'Glycerin would contribute to make your skin more oily if its oily already.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('15', '2', '1', '-2', 'Retinol may cause sensitivity, redness, and peeling, and for those with sensitive skin, these side effects can sometimes be unbearable.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('16', '5', '1', '-2', 'Retinol may cause sensitivity, redness, and peeling, and for those with sensitive skin, these side effects can sometimes be unbearable.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('17', '3', '1', '5', 'It has the ability to accelerate cell renewal, removing dead skin cells to produce new and fresh ones. That means you dont have to worry about clogged pores or dull skin.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('18', '3', '7', '5', 'Niacinamide is another hard-working ingredient that has several benefits, from relieving and calming inflammation to increasing collagen production and decreasing fat.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('19', '3', '10', '5', 'Without sufficient hydration, your skin will produce even more oil just to compensate.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('20', '7', '9', '5', 'Salicylic acid is classified as a keratolytic, or peeling agent. It works by causing the outer layer of skin to shed. It is a common and effective treatment for a wide variety of skin problems. As a psoriasis treatment, it acts as a scale lifter, helping to soften and remove psoriasis scales.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('21', '7', '1', '5', 'is available as a gel or cream, it is good for the skin.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('22', '5', '5', '-2', 'While vitamin C is a great ingredient and it is generally pretty safe and well-tolerated, those with sensitive skin may experience some irritation using products that contain the antioxidant');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('23', '5', '9', '5', 'Since salicylic acid is a beta hydroxy acid, its great for sensitive skin, too');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('24', '6', '203', '5', 'mandelic acid is absorbed more slowly by the skin to provide mild exfoliation. Its also an antimicrobial and anti-inflammatory agent, so it can help reduce redness and support a healthy microbiome in the skin.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('25', '5', '18', '5', 'For sensitive skin, vitamin E oil soothes and provides a protective barrier.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('26', '6', '7', '5', 'A prime cause of redness and rosacea is a weak moisture barrier and increased transepidermal water loss. Both contribute to the skins irritability and susceptibility to inflammation.Niacinamide increases the biosynthesis of ceramides, boosts nourishing fatty acid levels in the skin, and prevents water loss. Its potent anti-inflammatory properties combat rosaceas redness, irritation, and blotchiness.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('27', '5', '20', '5', ' It’s considered very safe and unlikely to irritate the skin.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('28', '6', '201', '-2', 'will irritate your skin');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('29', '6', '205', '-2', 'will irritate your skin');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('30', '4', '1', '-2', 'Retinol may cause sensitivity, redness, and peeling, and for those with sensitive skin, these side effects can sometimes be unbearable.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('31', '4', '202', '5', 'Glycolic, lactic, mandelic, and citric acids are considered AHAs, and theyre best on skin where breakouts are not a problem.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('32', '4', '9', '5', 'By fighting the germs that cause acne and reducing the inflammation that arises with clogged pores, salicylic acid helps clear the skin without adding shine or oil.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('33', '4', '20', '-2', 'Glycerin would contribute to make your skin more oily if its oily already.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('34', '4', '203', '5', 'Glycolic, lactic, mandelic, and citric acids are considered AHAs, and theyre best on skin where breakouts are not a problem.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('35', '4', '7', '5', 'Niacinamide is another hard-working ingredient that has several benefits, from relieving and calming inflammation to increasing collagen production and decreasing fat.');
INSERT INTO skin_ingredient (skin_ingr_id,skin_id,ingr_id,compatibility_points,rel_desc) VALUES ('36', '4', '204', '5', 'Glycolic, lactic, mandelic, and citric acids are considered AHAs, and theyre best on skin where breakouts are not a problem.');

