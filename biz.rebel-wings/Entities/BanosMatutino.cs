﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable enable
using System;
using System.Collections.Generic;

namespace biz.rebel_wings.Entities
{
    public partial class BanosMatutino
    {
        public BanosMatutino()
        {
            PhotoBanosMatutinos = new HashSet<PhotoBanosMatutino>();
        }

        public int Id { get; set; }
        public int? Branch { get; set; }
        public string Comment { get; set; } = null!;
        public int CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public int? UpdatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }

        public virtual User CreatedByNavigation { get; set; } = null!;
        public virtual ICollection<PhotoBanosMatutino> PhotoBanosMatutinos { get; set; }
    }
}