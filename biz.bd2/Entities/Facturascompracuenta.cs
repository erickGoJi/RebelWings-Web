﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd2.Entities
{
    public partial class Facturascompracuenta
    {
        public string Numserie { get; set; }
        public int Numfactura { get; set; }
        public string N { get; set; }
        public int Numlinea { get; set; }
        public int? Tipo { get; set; }
        public string Cuenta { get; set; }
        public double? Importe { get; set; }
        public string Centrocoste { get; set; }

        public virtual Facturascompra NNavigation { get; set; }
    }
}