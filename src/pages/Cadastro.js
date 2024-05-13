import React from 'react';
import arvore from '../img/arvore.png';
import './Cadastro.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  especie: '',
  latitude: '',
  longitude: '',
  diametro_copa: '',
  altura_media: '',
  largura_calcada: '',
  pavimento: '',
  largura_via_publica: '',
  fluxo_veiculos: '',
  passagem_pedestre: '',
  fluxo_pedestres: '',
  rede_eletrica: '',
  elementos_proximos: '',
  tipo_sistema_radicular: '',
  afloramento: '',
  danos_passeio: '',
  projecao_raizes: '',
  condicao_fitossanitaria: '',
  cavidade: '',
  termitas: '',
  coleobrocas: '',
  lesao: '',
  declinio: '',
  micelios: '',
  anelamento: '',
  necrose: '',
  formigas: '',
  fungos: '',
  local_afetado: '',
  compromete_condicao_arvore: '',
  monitorar: '',
  observacoes: '',
  data_cadastro: '',
  responsavel_tecnico: ''
};

const validationSchema = Yup.object({
  especie: Yup.string().required(),
  latitude: Yup.string().required(),
  longitude: Yup.string().min(1).required(),
  diametro_copa: Yup.string().required(),
  altura_media: Yup.string().required(),
  largura_calcada: Yup.string().min(1).required(),
  pavimento: Yup.string().required(),
  largura_via_publica: Yup.string().required(),
  fluxo_veiculos: Yup.string().required(),
  passagem_pedestre: Yup.string().min(1).required(),
  fluxo_pedestres: Yup.string().required(),
  rede_eletrica: Yup.string().required(),
  elementos_proximos: Yup.string().min(1).required(),
  tipo_sistema_radicular: Yup.string().required(),
  afloramento: Yup.string().required(),
  danos_passeio: Yup.string().required(),
  projecao_raizes: Yup.string().required(),
  condicao_fitossanitaria: Yup.string().required(),
  cavidade: Yup.string().required(),
  termitas: Yup.string().required(),
  coleobrocas: Yup.string().required(),
  lesao: Yup.string().required(),
  declinio: Yup.string().required(),
  micelios: Yup.string().required(),
  anelamento: Yup.string().required(),
  necrose: Yup.string().required(),
  formigas: Yup.string().required(),
  fungos: Yup.string().required(),
  local_afetado: Yup.string().required(),
  compromete_condicao_arvore: Yup.string().required(),
  monitorar: Yup.string().required(),
  observacoes: Yup.string().required(),
  data_cadastro: Yup.date().required(),
  responsavel_tecnico: Yup.string().required()
});

const Cadastro = () => {
  const handleSubmit = (values) => {
    // handle form submission here
    console.log(values);
  };

  return (
    <>
      <div className='divCadastro'>
      <img className='arvorelogo' src={arvore} alt='Logo de uma árvore'></img>
        <h1>Cadastro de Árvores</h1>
      </div>
    <div className='divCadastroMain'>
      <div className='fundo'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label className='calabel'>Espécie</label>
            <Field className="campform" type="text" name="especie" />
            <ErrorMessage name="especie" />
          </div>
          <div>
            <label className='calabel'>Latitude</label>
            <Field className='camform' type="text" name="latitude" />
            <ErrorMessage name="latitude" />

            <label className='calabel'>Longitude</label>
            <Field className='camform' type="text" name="longitude" />
            <ErrorMessage name="longitude" />

            <label className='calabel'>Diâmetro da Copa</label>
            <Field className='camform' type="text" name="diametro_copa" />
            <ErrorMessage name="diametro_copa" />
          </div>
          <div>
            <label className='calabel'>Altura Média</label>
            <Field className='camform' type="text" name="altura_media" />
            <ErrorMessage name="altura_media" />

            <label className='calabel'>Largura da Calçada</label>
            <Field className='camform' type="text" name="largura_calcada" />
            <ErrorMessage name="largura_calcada" />
          </div>
          <div>
            <label className='calabel'>Tipo de Sistema Radicular</label>
            <Field className='camform' type="text" name="tipo_sistema_radicular" />
            <ErrorMessage name="tipo_sistema_radicular" />

            <label className='calabel'>Largura da Via Pública</label>
            <Field className='camform' type="text" name="largura_via_publica" />
            <ErrorMessage name="largura_via_publica" />
          </div>
          <div>
            <label className='calabel'>Fluxo de Veículos</label>
            <Field className='camform' type="text" name="fluxo_veiculos" />
            <ErrorMessage name="fluxo_veiculos" />

            <label className='calabel'>Passagem de Pedestre</label>
            <Field className='camform' type="text" name="passagem_pedestre" />
            <ErrorMessage name="passagem_pedestre" />
          </div>
          <div>
            <label className='calabel'>Fluxo de Pedestres</label>
            <Field className='camform' type="text" name="fluxo_pedestres" />
            <ErrorMessage name="fluxo_pedestres" />

            <label className='calabel'>Condição Fitossanitária</label>
            <Field className='camform' type="text" name="condicao_fitossanitaria" />
            <ErrorMessage name="condicao_fitossanitaria" />
          </div>
          <div>
            <label className='calabel'>Local Afetado</label>
            <Field className='camform' type="text" name="local_afetado" />
            <ErrorMessage name="local_afetado" />
          </div>
          <div className='opcao'>
            <label className='calabel'>Rede Elétrica</label>
            <Field className='camform' as="select" name="rede_eletrica">
              <option value="">Selecione</option>
              <option value="Primaria">Primária</option>
              <option value="Secundaria">Secundária</option>
              <option value="Telefonica">Telefônica</option>
            </Field>
            <ErrorMessage name="rede_eletrica" />

            <label className='calabel'>Elementos Próximos</label>
            <Field className='camform' as="select" name="elementos_proximos">
              <option value="">Selecione</option>
              <option value="Boca de Lobo">Boca de Lobo</option>
              <option value="Poste de Energia">Poste de Energia</option>
              <option value="Telefonica">Telefônica</option>
            </Field>
            <ErrorMessage name="elementos_proximos" />

            <label className='calabel'>Pavimento</label>
            <Field className='camform' as="select" name="pavimento">
              <option value="">Selecione</option>
              <option value="Cimento">Cimento</option>
              <option value="Bloquete">Bloquete</option>
              <option value="Ceramico">Cerâmico</option>
            </Field>
            <ErrorMessage name="pavimento" />
          </div>
          <div>
            <label className='calabel'>Afloramento</label>
            <div className='escolha'>
              <label className='calabel'>
                <Field className='camform' type="radio" name="afloramento" value="Sim" />
                Sim
              </label>
              <label className='calabel'>
                <Field className='camform' type="radio" name="afloramento" value="Não" />
                Não
              </label>
            </div>
            <ErrorMessage name="afloramento" />

            <label className='calabel'>Danos no Passeio</label>
            <div className='escolha'>
              <label className='calabel'>
                <Field className='camform' type="radio" name="danos_passeio" value="Sim" />
                Sim
              </label>
              <label className='calabel'>
                <Field type="radio" name="danos_passeio" value="Não" />
                Não
              </label>
            </div>
            <ErrorMessage name="danos_passeio" />

            <label className='calabel'>Projeção das Raízes</label>
            <div className='escolha'>
              <label className='calabel'>
                <Field className='camform' type="radio" name="projecao_raizes" value="Sim" />
                Sim
              </label>
              <label className='calabel'>
                <Field className='camform' type="radio" name="projecao_raizes" value="Não" />
                Não
              </label>
            </div>
            <ErrorMessage name="projecao_raizes" />
          </div>
          <div>
            <label className='calabel'>Cavidade</label>
            <div className='escolha'>
              <label className='calabel'>
                <Field className='camform' type="radio" name="cavidade" value="Sim" />
                Sim
              </label>
              <label className='calabel'>
                <Field className='camform' type="radio" name="cavidade" value="Não" />
                Não
              </label>
            </div>
            <ErrorMessage name="cavidade" />
          </div>
          <div>
            <label className='calabel'>Termitas</label>
            <div className='escolha'>
              <label className='calabel'>
                <Field className='camform' type="radio" name="termitas" value="Sim" />
                Sim
              </label>
              <label className='calabel'>
                <Field className='camform' type="radio" name="termitas" value="Não" />
                Não
              </label>
            </div>
            <ErrorMessage name="termitas" />
          </div>
          <div>
            <label className='calabel'>Coleóbrocas</label>
            <div className='escolha'>
              <label className='calabel'>
                <Field className='camform' type="radio" name="coleobrocas" value="Sim" />
                Sim
              </label>
              <label className='calabel'>
                <Field className='camform' type="radio" name="coleobrocas" value="Não" />
                Não
              </label>
            </div>
            <ErrorMessage name="coleobrocas" />
          </div>
          <div>
            <label> className='calabel'Lesão</label>
            <div className='escolha'>
              <label className='calabel'>
                <Field className='camform' type="radio" name="lesao" value="Sim" />
                Sim
              </label>
              <label className='calabel'>
                <Field className='camform' type="radio" name="lesao" value="Não" />
                Não
              </label>
            </div>
            <ErrorMessage name="lesao" />
          </div>
          <div>
            <label className='calabel'>Declínio</label>
            <div className='escolha'>
              <label className='calabel'>
                <Field className='camform' type="radio" name="declinio" value="Sim" />
                Sim
              </label>
              <label className='calabel'>
                <Field className='camform' type="radio" name="declinio" value="Não" />
                Não
              </label>
            </div>
            <ErrorMessage name="declinio" />
          </div>
          <div>
            <label className='calabel'>Micélios</label>
            <div className='escolha'>
              <label className='calabel'>
                <Field className='camform' type="radio" name="micelios" value="Sim" />
                Sim
              </label>
              <label className='calabel'>
                <Field className='camform' type="radio" name="micelios" value="Não" />
                Não
              </label>
            </div>
            <ErrorMessage name="micelios" />
          </div>
          <div>
            <label className='calabel'>Anelamento</label>
            <div className='escolha'>
              <label className='calabel'>
                <Field className='camform' type="radio" name="anelamento" value="Sim" />
                Sim
              </label>
              <label className='calabel'>
                <Field className='camform' type="radio" name="anelamento" value="Não" />
                Não
              </label>
            </div>
            <ErrorMessage name="anelamento" />
          </div>
          <div>
            <label className='calabel'>Necrose</label>
            <div className='escolha'>
              <label className='calabel'>
                <Field className='camform' type="radio" name="necrose" value="Sim" />
                Sim
              </label>
              <label className='calabel'>
                <Field className='camform' type="radio" name="necrose" value="Não" />
                Não
              </label>
            </div>
            <ErrorMessage name="necrose" />
          </div>
          <div>
            <label className='calabel'>Formigas</label>
            <div className='escolha'>
              <label className='calabel'>
                <Field className='camform' type="radio" name="formigas" value="Sim" />
                Sim
              </label>
              <label className='calabel'>
                <Field className='camform' type="radio" name="formigas" value="Não" />
                Não
              </label>
            </div>
            <ErrorMessage name="formigas" />
          </div>
          <div>
            <label className='calabel'>Fungos</label>
            <div className='escolha'>
              <label className='calabel'>
                <Field className='camform' type="radio" name="fungos" value="Sim" />
                Sim
              </label>
              <label className='calabel'>
                <Field className='camform' type="radio" name="fungos" value="Não" />
                Não
              </label>
            </div>
            <ErrorMessage name="fungos" />
          </div>
          <div>
            <label className='calabel'>Compromete Condição da Árvore</label>
            <div className='escolha'>
              <label className='calabel'>
                <Field className='camform' type="radio" name="compromete_condicao_arvore" value="Sim" />
                Sim
              </label>
              <label className='calabel'>
                <Field className='camform' type="radio" name="compromete_condicao_arvore" value="Não" />
                Não
              </label>
            </div>
            <ErrorMessage name="compromete_condicao_arvore" />
          </div>
          <div>
            <label className='calabel'>Monitorar</label>
            <div className='escolha'>
              <label className='calabel'>
                <Field className='camform' type="radio" name="monitorar" value="Sim" />
                Sim
              </label>
              <label className='calabel'>
                <Field className='camform' type="radio" name="monitorar" value="Não" />
                Não
              </label>
            </div>
            <ErrorMessage name="monitorar" />
          </div>
          <div>
            <label className='calabel'>Observações</label>
            <Field className='camform' type="text" name="observacoes" />
            <ErrorMessage name="observacoes" />
          
            <label className='calabel'>Data de Cadastro</label>
            <Field className='camform' type="date" name="data_cadastro" />
            <ErrorMessage name="data_cadastro" />

            <label className='calabel'>Responsável Técnico</label>
            <Field className='camform' type="text" name="responsavel_tecnico" />
            <ErrorMessage name="responsavel_tecnico" />
          </div>
          <button type="submit">Cadastrar</button>
        </Form>
      </Formik>
    </div>
    </div>
    </>
  );
};

export default Cadastro;
