﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd2.Entities
{
    public partial class AnulAlbventatot
    {
        public string Serie { get; set; }
        public int Numero { get; set; }
        public string N { get; set; }
        public int Numlinea { get; set; }
        public double? Bruto { get; set; }
        public double? Dtocomerc { get; set; }
        public double? Totdtocomerc { get; set; }
        public double? Dtopp { get; set; }
        public double? Totdtopp { get; set; }
        public double? Baseimponible { get; set; }
        public double? Iva { get; set; }
        public double? Totiva { get; set; }
        public double? Req { get; set; }
        public double? Totreq { get; set; }
        public double? Total { get; set; }
        public string Esgasto { get; set; }
        public int? Coddto { get; set; }
        public string Descripcion { get; set; }

        public virtual AnulAlbventacab AnulAlbventacab { get; set; }
    }
}