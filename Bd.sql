CREATE TABLE proprietario (
	cpf_prop CHAR (11) NOT NULL,
	nome_prop VARCHAR(100), 
	datanasc_prop CHAR (10),
	endereco_prop VARCHAR (100),
	
	PRIMARY KEY (cpf_prop)
);

CREATE TABLE fazenda(
	cnpj_faz CHAR (14) NOT NULL,
	endereco_faz VARCHAR(100), 
	nome_faz VARCHAR (40),
	area_faz INTEGER,
	prop_cpf CHAR (11),
	
	PRIMARY KEY (cnpj_faz),
	FOREIGN KEY (prop_cpf) REFERENCES proprietario (cpf_prop)
);


CREATE TABLE funcionario(
	cpf_func CHAR (11) NOT NULL,
	nome_func VARCHAR (100),
	datanasc_func CHAR (10),
	faz_cnpj CHAR (14),
	
	PRIMARY KEY (cpf_func),
	FOREIGN KEY (faz_cnpj) REFERENCES fazenda (cnpj_faz)
);


CREATE TABLE gcorte(
	brinco VARCHAR (11) NOT NULL,
	nome_gcorte VARCHAR (40),
	sexo_gcorte CHAR (1),
	raca_gcorte VARCHAR (40),
	matriz_gcorte VARCHAR (40),
	reprodutor_gcorte VARCHAR (40),
	datanasc_gcorte CHAR (10),
	regfoto_gcorte VARCHAR (50),
	faz_cnpj CHAR (14),
	peso_gcorte VARCHAR (4),
	
	PRIMARY KEY (brinco),
	FOREIGN KEY (faz_cnpj) REFERENCES fazenda (cnpj_faz)
);

CREATE TABLE gleite(
	brinco VARCHAR (11) NOT NULL,
	nome_gleite VARCHAR (40),
	sexo_gleite CHAR (1),
	raca_gleite VARCHAR (40),
	matriz_gleite VARCHAR (40),
	reprodutor_gleite VARCHAR (40),
	datanasc_gleite CHAR (10),
	regfoto_gleite varchar(50),
	faz_cnpj CHAR (14),
	producao_gleite VARCHAR (4),
	
	PRIMARY KEY (brinco),
	FOREIGN KEY (faz_cnpj) REFERENCES fazenda (cnpj_faz)
);



