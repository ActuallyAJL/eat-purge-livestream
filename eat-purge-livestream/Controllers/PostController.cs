using Microsoft.AspNetCore.Mvc;
using System;
using eat_purge_livestream.Models;
using eat_purge_livestream.Repositories;

namespace eat_purge_livestream.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;
        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }
    }
}
