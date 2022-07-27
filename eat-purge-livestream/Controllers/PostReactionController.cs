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

        [HttpPost]
        public IActionResult Post(PostReaction pr)
        {
            _postReactionRepository.Add(pr);
            return Ok(pr);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _postReactionRepository.Delete(id);
            return NoContent();
        }

        [HttpGet("{postId}/{reactionId}")]
        public IActionResult Get(int postId, int reactionId)
        {
            return Ok(_postReactionRepository.GetCountByPostId(postId, reactionId));
        }
    }
}
