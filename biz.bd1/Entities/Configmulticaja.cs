﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd1.Entities
{
    public partial class Configmulticaja
    {
        public int Idterminal { get; set; }
        public string Caja { get; set; }
        public int? Numvendedores { get; set; }
        public string Serieresolucion { get; set; }

        public virtual Terminale IdterminalNavigation { get; set; }
    }
}