﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd2.Entities
{
    public partial class IeJerarquia
    {
        public int IdDimension { get; set; }
        public int IdJerarquia { get; set; }
        public string NameJerarquia { get; set; }
        public string IdTitulo { get; set; }

        public virtual IeDimensione IdDimensionNavigation { get; set; }
    }
}