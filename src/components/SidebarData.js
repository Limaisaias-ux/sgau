import React from 'react'
//import HomeIcon from '@mui/icons-material/Home';
//import DescriptionIcon from '@mui/icons-material/Description';
import HomeIcon from '../img/homeicon.png';
import CadastroIcon from '../img/cadastroicon.png';
import RelatorioIcon from '../img/relatorioicon.png';
import ArvoresIcon from '../img/arvoresicon.png';
import OcorrenciasIcon from '../img/ocorrenciaicon.png';
import ConfIcon from '../img/conficon.png';
import { NavLink } from 'react-router-dom';



export const SidebarData = [ 
    {
        title: "Inicio",
        icon: HomeIcon,
        link: "/inicio"
    },
    {
        title: "Cadastro",
        icon: CadastroIcon,
        // link: <NavLink to="/cadastro">Cadastro</NavLink>
        link: "/cadastro"
    },
    {
        title: "Relatórios",
        icon: RelatorioIcon,
        link: "/relatorios"
    },
    {
        title: "Árvores",
        icon: ArvoresIcon,
        link: "/arvores"
    },
    {
        title: "Ocorrências",
        icon: OcorrenciasIcon,
        link: "/ocorrencias"
    },
    {
        title: "Configurações",
        icon: ConfIcon,
        link: "/configuracoes"
    }
];
