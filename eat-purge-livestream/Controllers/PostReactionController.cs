using Microsoft.AspNetCore.Mvc;
using System;
using eat_purge_livestream.Models;
using eat_purge_livestream.Repositories;

namespace eat_purge_livestream.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostReactionController : ControllerBase
    {
        private readonly IPostReactionRepository _postReactionRepository;
        public PostReactionController(IPostReactionRepository postReactionRepository)
        {
            _postReactionRepository = postReactionRepository;
        }
    }
}
