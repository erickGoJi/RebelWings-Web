﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd2.Entities
{
    public partial class Galeriaidioma
    {
        public int Idgaleria { get; set; }
        public string Ididioma { get; set; }
        public string Descripcion { get; set; }

        public virtual Galerium IdgaleriaNavigation { get; set; }
    }
}