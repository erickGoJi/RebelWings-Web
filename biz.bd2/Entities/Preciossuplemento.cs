﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd2.Entities
{
    public partial class Preciossuplemento
    {
        public int Codarticulo { get; set; }
        public int Codsuplemento { get; set; }
        public int Idtarifav { get; set; }
        public DateTime Fechaini { get; set; }
        public DateTime Fechafin { get; set; }
        public double? Valor { get; set; }
        public string Diasemana { get; set; }

        public virtual Articulo1 CodarticuloNavigation { get; set; }
    }
}