﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd1.Entities
{
    public partial class Facturasventaseriesresol
    {
        public string Numserie { get; set; }
        public int Numfactura { get; set; }
        public string N { get; set; }
        public string Seriefiscal1 { get; set; }
        public string Seriefiscal2 { get; set; }
        public int Numerofiscal { get; set; }

        public virtual Facturasventum NNavigation { get; set; }
    }
}