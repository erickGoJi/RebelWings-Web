﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.fortia.Entities
{
    public partial class RhEncAccionEva
    {
        public RhEncAccionEva()
        {
            RhDetAccionEvas = new HashSet<RhDetAccionEva>();
            RhProcIncSdos = new HashSet<RhProcIncSdo>();
        }

        public int ClaAccionMtx { get; set; }
        public string NomMatriz { get; set; }
        public int ClaAccion { get; set; }
        public int ClaTipoDato { get; set; }
        public string DescTipoDato { get; set; }

        public virtual ICollection<RhDetAccionEva> RhDetAccionEvas { get; set; }
        public virtual ICollection<RhProcIncSdo> RhProcIncSdos { get; set; }
    }
}