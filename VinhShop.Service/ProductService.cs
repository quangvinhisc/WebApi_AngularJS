using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VinhShop.Common;
using VinhShop.Data.Infrastructure;
using VinhShop.Data.Repositories;
using VinhShop.Model.Models;

namespace VinhShop.Service
{
    public interface IProductService
    {
        Product Add(Product Product);
        void Update(Product Product);
        Product Delete(int id);
        IEnumerable<Product> GetAll();
        IEnumerable<Product> GetAll(string keyword);
        Product GetById(int id);
        void Save();
    }

    public class ProductService: IProductService
    {
        private IProductRepository _ProductRepository;
        private ITagRepository _TagRepository;
        private IProductTagRepository _ProductTagRepository;
        private IUnitOfWork _unitOfWork;


        public ProductService(IProductRepository ProductRepository, IProductTagRepository ProductTagRepository, ITagRepository TagRepository, IUnitOfWork unitOfWork)
        {
            this._ProductRepository = ProductRepository;
            this._ProductTagRepository = ProductTagRepository;
            this._TagRepository = TagRepository;
            this._unitOfWork = unitOfWork;
        }

        public Product Add(Product Product)
        {
            var product = _ProductRepository.Add(Product);
            _unitOfWork.Commit();
            if (!string.IsNullOrEmpty(Product.Tags))
            {

                string[] tags = Product.Tags.Split(',');
                for (int i = 0; i < tags.Length; i++)
                {
                    var tagId = StringHelper.ToUnsignString(tags[i]);
                    if (_TagRepository.Count(x => x.ID == tagId) == 0)
                    {
                        Tag tag = new Tag();
                        tag.ID = tagId;
                        tag.Name = tags[i];
                        tag.Type = CommonConstants.ProductTag;
                        _TagRepository.Add(tag);
                    }
                    ProductTag productTag = new ProductTag();
                    productTag.ProductID = Product.ID;
                    productTag.TagID = tagId;
                    _ProductTagRepository.Add(productTag);
                }
            }
            return product;

        }

        public Product Delete(int id)
        {
            return _ProductRepository.Delete(id);
        }

        public IEnumerable<Product> GetAll()
        {
            return _ProductRepository.GetAll();
        }

        public IEnumerable<Product> GetAll(string keyword)
        {
            if (!string.IsNullOrEmpty(keyword))
            {
                return _ProductRepository.GetMulti(x => x.Name.Contains(keyword) || x.Description.Contains(keyword));
            }
            return _ProductRepository.GetAll();
        }

        public Product GetById(int id)
        {
            return _ProductRepository.GetSingleById(id);
        }

        public void Save()
        {
            _unitOfWork.Commit();
        }

        public void Update(Product Product)
        {
            _ProductRepository.Update(Product);
            if (!string.IsNullOrEmpty(Product.Tags))
            {
                string[] tags = Product.Tags.Split(',');
                for (int i = 0; i < tags.Length; i++)
                {
                    var tagId = StringHelper.ToUnsignString(tags[i]);
                    if (_TagRepository.Count(x => x.ID == tagId) == 0)
                    {
                        Tag tag = new Tag();
                        tag.ID = tagId;
                        tag.Name = tags[i];
                        tag.Type = CommonConstants.ProductTag;
                        _TagRepository.Add(tag);
                    }
                    _ProductTagRepository.DeleteMulti(x => x.ProductID == Product.ID);
                    ProductTag productTag = new ProductTag();
                    productTag.ProductID = Product.ID;
                    productTag.TagID = tagId;
                    _ProductTagRepository.Add(productTag);
                }
                
            }
        }
    }
}
