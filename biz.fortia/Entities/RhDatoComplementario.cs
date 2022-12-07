﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.fortia.Entities
{
    public partial class RhDatoComplementario
    {
        public RhDatoComplementario()
        {
            RhDatoComplementarioValorHistoria = new HashSet<RhDatoComplementarioValorHistorium>();
        }

        public int ClaControl { get; set; }
        public int ClaEntidad { get; set; }
        public string Etiqueta { get; set; }
        public byte TipoControl { get; set; }
        public bool Requerido { get; set; }
        public bool Multilinea { get; set; }
        public int? Caracteres { get; set; }
        public int? Decimales { get; set; }
        public int? Orden { get; set; }
        public int? ClaLista { get; set; }
        public bool Multiseleccion { get; set; }
        public int? ClaSeccion { get; set; }
        public int? Referencia { get; set; }
        public bool? Calculado { get; set; }

        public virtual RhEntidad ClaEntidadNavigation { get; set; }
        public virtual RhListaDatoComplementario ClaListaNavigation { get; set; }
        public virtual RhSeccionDatoComplementario ClaSeccionNavigation { get; set; }
        public virtual ICollection<RhDatoComplementarioValorHistorium> RhDatoComplementarioValorHistoria { get; set; }
    }
}