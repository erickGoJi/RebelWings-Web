﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.fortia.Entities
{
    public partial class RhEncTraspaso
    {
        public RhEncTraspaso()
        {
            RhDetTraspasos = new HashSet<RhDetTraspaso>();
        }

        public int FolTraspaso { get; set; }
        public int ClaAlmacenOrigen { get; set; }
        public int ClaAlmacenDestino { get; set; }
        public DateTime FechaReferencia { get; set; }
        public string Descripcion { get; set; }
        public DateTime FechaUltCambio { get; set; }
        public int Estatus { get; set; }
        public int? TipoArticulo { get; set; }

        public virtual ICollection<RhDetTraspaso> RhDetTraspasos { get; set; }
    }
}