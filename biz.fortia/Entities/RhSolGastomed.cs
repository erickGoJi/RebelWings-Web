﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.fortia.Entities
{
    public partial class RhSolGastomed
    {
        public RhSolGastomed()
        {
            RhGastomedFams = new HashSet<RhGastomedFam>();
        }

        public int FolGastomed { get; set; }
        public int ClaTrab { get; set; }
        public int ClaEmpresa { get; set; }
        public int ClaUsuario { get; set; }
        public int Estatus { get; set; }
        public DateTime? FechaSolicita { get; set; }
        public DateTime? FechaAuto { get; set; }
        public int? AplicaTransMed { get; set; }
        public DateTime FechaUtlCambio { get; set; }
        public int? DatoValido { get; set; }

        public virtual ICollection<RhGastomedFam> RhGastomedFams { get; set; }
    }
}