﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd2.Entities
{
    public partial class KpiFiltroDef
    {
        public int Idkpi { get; set; }
        public int Idfiltro { get; set; }
        public int Iddetalle { get; set; }
        public string Joinsql { get; set; }
        public string Wheresql { get; set; }

        public virtual KpiFiltro IdfiltroNavigation { get; set; }
        public virtual Kpi IdkpiNavigation { get; set; }
    }
}