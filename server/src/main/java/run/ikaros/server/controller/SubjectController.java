package run.ikaros.server.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import reactor.core.publisher.Mono;
import run.ikaros.api.wrap.PagingWrap;
import run.ikaros.server.core.subject.service.SubjectService;

@Controller
@RequestMapping("/subject")
public class SubjectController {

    private final SubjectService subjectService;

    public SubjectController(SubjectService subjectService) {
        this.subjectService = subjectService;
    }

    /**
     * Subject list page.
     */
    @GetMapping("/list")
    public Mono<String> index(Model model) {
        return subjectService.findAllByPageable(new PagingWrap<>(1, 100, 0, null))
            .map(PagingWrap::getItems)
            .map(subs -> model.addAttribute("subjects", subs))
            .thenReturn("subjects");
    }

    /**
     * Get subject details by id.
     */
    @GetMapping("/{id}")
    public Mono<String> findById(@PathVariable("id") Long id, Model model) {
        return subjectService.findById(id)
            .map(subject -> model.addAttribute("subject", subject))
            .thenReturn("subject-details");
    }
}
